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
camera.position.set(400, 40, 400);
// camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

//-----------//-----------//-----------//-----------//-----------

const anbLight = new THREE.AmbientLight(0x333333);
scene.add(anbLight);

const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2, 0, 0);
spotLight.position.set(-10000, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);

//-----------//-----------//-----------//-----------//-----------

const ground = new THREE.GridHelper(600);
ground.position.y = -80;
scene.add(ground);
// scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

const stats: Stats = new Stats();
stats.dom.style.position = "absolute";
stats.dom.style.top = "0px";
document.body.appendChild(stats.dom);

const info: HTMLElement | null = document.getElementById("info");

//-----------//-----------//-----------//-----------//-----------

const sphere = new THREE.Mesh(new THREE.SphereGeometry(10), new THREE.MeshBasicMaterial({ color: "red", wireframe: true }));
scene.add(sphere);

const helper = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 40);
sphere.add(helper);

const earth = new THREE.Mesh(new THREE.SphereGeometry(100), new THREE.MeshBasicMaterial({ color: "blue", wireframe: true }));
scene.add(earth);

//-----------//-----------//-----------//-----------//-----------

const RADIUS = 140;

function animate() {
  const prevPos = sphere.position.clone();
  const x = RADIUS * Math.sin(Date.now() / 1000);
  const y = 20 * Math.sin(Date.now() / 500);
  const z = RADIUS * Math.cos(Date.now() / 1000);

  sphere.position.set(x, y, z);

  const frontVec = getFrontDirection(x, y, z, prevPos);
  helper.setDirection(frontVec);

  // カメラ
  const position = frontVec.negate().multiplyScalar(100);
  const newPosition = sphere.position.clone().add(position);
  camera.position.copy(newPosition);
  camera.lookAt(new THREE.Vector3(x, y, z));

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

function getFrontDirection(x: number, y: number, z: number, prevPos: THREE.Vector3) {
  const nextPos = new THREE.Vector3(x, y, z);
  const frontVec = nextPos.clone().sub(prevPos).normalize();
  return frontVec;
}
