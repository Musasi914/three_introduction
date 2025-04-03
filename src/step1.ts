import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: devicePixelRatio === 1 });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
// renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 2000);
camera.position.set(100, 100, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// orbitcontrols
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

//-----------//-----------//-----------//-----------//-----------

const anbLight = new THREE.AmbientLight(0x333333);
scene.add(anbLight);

const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2, 0, 0);
spotLight.position.set(-10000, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);

//-----------//-----------//-----------//-----------//-----------

const plane = new THREE.GridHelper(1000, 20);
plane.position.y = -80;
scene.add(plane);
scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

const stats: Stats = new Stats();
stats.dom.style.position = "absolute";
stats.dom.style.top = "0px";
document.body.appendChild(stats.dom);

const info: HTMLElement | null = document.getElementById("info");

//-----------//-----------//-----------//-----------//-----------

const direction = new THREE.Vector3(0, 1, 0);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(10), new THREE.MeshBasicMaterial({ color: "red", wireframe: true }));
scene.add(sphere);

const sphereHelper = new THREE.ArrowHelper(direction, new THREE.Vector3(0, 0, 0), 40);
sphere.add(sphereHelper);

const earth = new THREE.Mesh(new THREE.SphereGeometry(70), new THREE.MeshBasicMaterial({ color: "purple", wireframe: true }));
scene.add(earth);

//-----------//-----------//-----------//-----------//-----------

const radius = 150;
let digree = 0;
const startTime = Date.now();

function animate() {
  const prevPos = sphere.position.clone();

  const progress = (Date.now() - startTime) / 1000;

  digree = 120 * progress;

  const radian = (digree * Math.PI) / 180;
  const x = 110 * Math.cos(radian);
  const y = 30 * Math.sin(radian * 2);
  const z = 110 * Math.sin(radian);

  const nextPos = new THREE.Vector3(x, y, z);
  sphere.position.copy(nextPos);

  let sub = nextPos.clone().sub(prevPos);
  sub = sub.normalize();
  sphereHelper.setDirection(sub);

  //////////

  // camera.position.copy(nextPos.sub(sub.multiply(new THREE.Vector3(200, 200, 200))));
  // camera.lookAt(new THREE.Vector3(x, y, z));

  const backVector = sub.clone().negate().multiplyScalar(100);
  camera.position.copy(backVector.add(sphere.position));
  camera.lookAt(sphere.position);

  //////////

  // controls.update();
  stats.update();

  // レンダリング情報を画面に表示
  if (!info) throw new Error("infoがみつからん");
  info.innerHTML = JSON.stringify(renderer.info.render, null, "    ");

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
