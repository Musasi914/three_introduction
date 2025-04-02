import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/Addons.js";
import { CityPoint } from "./citypoint.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 10000);
camera.position.set(-300, 50, -300);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const controls = new TrackballControls(camera, renderer.domElement);
controls.maxDistance = 1800;
controls.minDistance = 200;
controls.update();

/** 主要都市緯度経度一覧 **/
const pointsList: [number, number][] = [
  [51.2838, 0], // イギリス
  [39, -116], // 北京
  [34, 118], // ロサンゼルス
  [-33, 151], // シドニー
  [-23, -46], // サンパウロ
  [1, 103], // シンガポール
  [90, 0], // 北極
  [-90, 0], // 南極
];

//--------------//--------------//--------------//--------------//--------------//

scene.add(new THREE.AxesHelper(300));
scene.add(new THREE.GridHelper(600));

//--------------//--------------//--------------//--------------//--------------//

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(-1, 1, 0);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x444444);
scene.add(ambientLight);

//--------------//--------------//--------------//--------------//--------------//

// 地球
{
  const geometry = new THREE.SphereGeometry(100, 60, 60);
  const material = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("/ground.jpg"),
    bumpMap: new THREE.TextureLoader().load("/bump.jpg"),
    specularMap: new THREE.TextureLoader().load("/specular.png"),
  });
  scene.add(new THREE.Mesh(geometry, material));
}

// 雲
const cloudGeo = new THREE.SphereGeometry(102, 60, 60);
const cloudMat = new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load("/cloud.jpg"),
  blending: THREE.AdditiveBlending,
  transparent: true,
});
const cloud = new THREE.Mesh(cloudGeo, cloudMat);
scene.add(cloud);

// 星
{
  const geometry = new THREE.SphereGeometry(2000, 60, 60);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("/star.jpg"),
  });
  scene.add(new THREE.Mesh(geometry, material));
}

//--------------//--------------//--------------//--------------//--------------//

const japan = new CityPoint(0xffffff, 35.658651, 139.742689);
scene.add(japan);

pointsList.forEach((point, i) => {
  // country
  const country = new CityPoint(0xff00ff, point[0], point[1]);
  scene.add(country);

  // line
  let geometry = new THREE.BufferGeometry();

  let line = new THREE.Line(
    geometry,
    new THREE.LineBasicMaterial({
      linewidth: 2,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
    })
  );
  scene.add(line);

  const points = createOrbitPoints(new THREE.Vector3(japan.x, japan.y, japan.z), new THREE.Vector3(country.x, country.y, country.z));
  geometry.setFromPoints(points);
});

const satellite = new CityPoint(0xffff00, 0, 0);
scene.add(satellite);

//--------------//--------------//--------------//--------------//--------------//
//--------------//--------------//--------------//--------------//--------------//

function animate() {
  satellite.moveOnEquator();
  cloud.rotation.y += 0.001;
  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

//--------------//--------------//--------------//--------------//--------------//

function createOrbitPoints(startPos: THREE.Vector3, endPos: THREE.Vector3, segmentNum = 100) {
  const vertices = [];

  const startVec = startPos.clone();
  const endVec = endPos.clone();

  // 2ベクトルの回転軸
  const axis = startVec.clone().cross(endVec);
  axis.normalize();

  // 2ベクトルの回転角
  const angle = startVec.angleTo(endVec);

  for (let i = 0; i < segmentNum; i++) {
    const q = new THREE.Quaternion();
    q.setFromAxisAngle(axis, (i / segmentNum) * angle);
    vertices.push(startVec.clone().applyQuaternion(q));
  }

  vertices.push(endVec);

  return vertices;
}
