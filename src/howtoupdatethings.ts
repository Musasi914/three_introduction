import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

// 準備
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 400);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//
const MAX_POINTS = 500;

// geometry
const geometry = new THREE.BufferGeometry();

// attributes
const positions = new Float32Array(MAX_POINTS * 3);
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

// draw rrange
const drawCount = 2;
geometry.setDrawRange(0, drawCount);

// material
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

// line
const line = new THREE.Line(geometry, material);
scene.add(line);

const positionAttribute = line.geometry.getAttribute("position");
let x = 0,
  y = 0,
  z = 0;

for (let i = 0; i < positionAttribute.count; i++) {
  positionAttribute.setXYZ(i, x, y, z);

  x += (Math.random() - 0.5) * 20;
  y += (Math.random() - 0.5) * 20;
  z += (Math.random() - 0.5) * 20;
}

let frame = 0;

// rendering
function animate() {
  line.geometry.setDrawRange(0, frame);

  renderer.render(scene, camera);

  frame++;
}

if (WebGL.isWebGL2Available()) {
  renderer.setAnimationLoop(animate);
} else {
  throw new Error();
}
