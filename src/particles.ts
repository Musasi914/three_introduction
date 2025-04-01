import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer();
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.01, 10000);
camera.position.set(500, 500, 500);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

const anbLight = new THREE.AmbientLight(0xffffff);
scene.add(anbLight);

const directLight = new THREE.DirectionalLight(0xffffff);
directLight.position.set(1, 1, 1);
scene.add(directLight);

//-----------//-----------//-----------//-----------//-----------

// scene.add(new THREE.GridHelper(600));
// scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

const vertices = [];

const SIZE = 3000;
const LENGTH = 1000;

for (let i = 0; i < LENGTH; i++) {
  const x = SIZE * (Math.random() - 0.5);
  const y = SIZE * (Math.random() - 0.5);
  const z = SIZE * (Math.random() - 0.5);
  vertices.push(x, y, z);
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({
  size: 10,
  color: 0xffffff,
});

const mesh = new THREE.Points(geometry, material);
scene.add(mesh);

//-----------//-----------//-----------//-----------//-----------

let rot = 0;

function animate() {
  rot += 0.1;
  const radian = (rot * Math.PI) / 180;
  camera.position.x = 500 * Math.sin(radian);
  camera.position.z = 500 * Math.cos(radian);
  camera.lookAt(0, 0, 0);
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
