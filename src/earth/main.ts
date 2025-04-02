import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { TrackballControls } from "three/examples/jsm/Addons.js";
import { Earth } from "./earth.js";
import { CityPoint } from "./citypoint.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: devicePixelRatio === 1 });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 2000);
camera.position.set(-250, 0, -250);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

/** 主要都市緯度経度一覧 **/
const citiesPoints: [number, number][] = [
  [51.2838, 0], // イギリス
  [39, -116], // 北京
  [34, 118], // ロサンゼルス
  [-33, 151], // シドニー
  [-23, -46], // サンパウロ
  [1, 103], // シンガポール
  [90, 0], // 北極
  [-90, 0], // 南極
];

//-----------//-----------//-----------//-----------//-----------

const controller = new TrackballControls(camera, renderer.domElement);
controller.maxDistance = 1000;
controller.minDistance = 200;
controller.noPan = true;
controller.dynamicDampingFactor = 0.05;

//-----------//-----------//-----------//-----------//-----------

const anbLight = new THREE.AmbientLight(0x333333);
scene.add(anbLight);

// const directLight = new THREE.DirectionalLight(0xffffff);
// directLight.position.set(-1, 0, 0);
// directLight.castShadow = true;
// scene.add(directLight);

const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2, 0, 0);
spotLight.position.set(-10000, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);

//-----------//-----------//-----------//-----------//-----------

// scene.add(new THREE.GridHelper(600));
// scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

const earth = new Earth();
scene.add(earth);

//-----------//-----------//-----------//-----------//-----------

// 背景星
{
  const geometry = new THREE.SphereGeometry(1000, 60, 40);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("/star.jpg"),
  });
  const background = new THREE.Mesh(geometry, material);
  scene.add(background);
}

//-----------//-----------//-----------//-----------//-----------

// japan
const japan = new CityPoint(0xffff00, [35.658651, 139.742689]);
applyGpsPosition(japan, japan.getCoords());
scene.add(japan);

// cities
let cities = [];
citiesPoints.forEach((point) => {
  const city = new CityPoint(0xff00ff, point);
  cities.push(city);
  applyGpsPosition(city, city.getCoords());
  scene.add(city);
});

// 赤道上軌道衛星
const satellite = new CityPoint(0xff0000, [0, 0]);
scene.add(satellite);

//-----------//-----------//-----------//-----------//-----------

function animate() {
  earth.update();
  controller.update();

  satellite.longitude = Date.now() / 100;
  applyGpsPosition(satellite, satellite.getCoords());

  renderer.render(scene, camera);
}

if (WebGL.isWebGL2Available()) {
  renderer.setAnimationLoop(animate);
} else {
  throw new Error("WebGLがつかえない");
}

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
});

//-----------//-----------//-----------//-----------//-----------

function translateGeoCoords(latitude: number, longitude: number, radius: number) {
  // 仰角
  const phi = (latitude * Math.PI) / 180;

  // 方位角
  const theta = ((longitude - 180) * Math.PI) / 180;

  const x = -radius * Math.cos(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

function applyGpsPosition(object3d: THREE.Object3D, coords: { latitude: number; longitude: number; radius: number }) {
  const position = translateGeoCoords(coords.latitude, coords.longitude, coords.radius);
  object3d.position.copy(position);
}
