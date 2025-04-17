import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { MapControls } from "three/examples/jsm/Addons.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: devicePixelRatio === 1 });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
// renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 1000);
camera.position.set(0, 200, -400);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);
scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

//-----------//-----------//-----------//-----------//-----------

// orbitcontrols
const controls = new MapControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 100;
controls.maxDistance = 500;
controls.maxPolarAngle = Math.PI / 2;

//-----------//-----------//-----------//-----------//-----------

const dirLight1 = new THREE.DirectionalLight(0xffffff, 3);
dirLight1.position.set(1, 1, 1);
scene.add(dirLight1);

const dirLight2 = new THREE.DirectionalLight(0x002288, 3);
dirLight2.position.set(-1, -1, -1);
scene.add(dirLight2);

const anbLight = new THREE.AmbientLight(0x555555);
scene.add(anbLight);

//-----------//-----------//-----------//-----------//-----------

const geometry = new THREE.BoxGeometry();
geometry.translate(0, 0.5, 0);
const material = new THREE.MeshPhongMaterial({ color: 0xeeeeee, flatShading: true });

for (let i = 0; i < 500; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = Math.random() * 1600 - 800;
  mesh.position.y = 0;
  mesh.position.z = Math.random() * 1600 - 800;
  mesh.scale.x = 20;
  mesh.scale.y = Math.random() * 80 + 10;
  mesh.scale.z = 20;
  // mesh.updateMatrix();
  // mesh.matrixAutoUpdate = false;
  scene.add(mesh);
}

//-----------//-----------//-----------//-----------//-----------

function animate() {
  controls.update();
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
