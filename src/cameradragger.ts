import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// 準備
const renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 10000);
camera.position.set(0, 0, 1000);

// ------------------------------------------------------------------------

// 平行光源
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// 環境光
const ambientLight = new THREE.AmbientLight(0x999999);
scene.add(ambientLight);

// ------------------------------------------------------------------------------
//geometry
// 画像
const texture = new THREE.TextureLoader().load("/earthmap1k.jpg");
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshStandardMaterial({
  map: texture,
  side: THREE.DoubleSide,
});

const geometry = new THREE.SphereGeometry(300, 30, 30);
const earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

let rot = 0;
let mouseX = 0;
document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
});

function creaateStarField() {
  const vertices = [];
  for (let i = 0; i < 1000; i++) {
    const x = 3000 * (Math.random() - 0.5);
    const y = 3000 * (Math.random() - 0.5);
    const z = 3000 * (Math.random() - 0.5);
    vertices.push(x, y, z);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({ size: 10, color: 0xffffff });

  const mesh = new THREE.Points(geometry, material);
  scene.add(mesh);
}
creaateStarField();

function animate() {
  const targetRot = (mouseX / window.innerWidth) * 360;
  rot += (targetRot - rot) * 0.01;
  const radian = (rot * Math.PI) / 180;
  camera.position.x = 3000 * Math.sin(radian);
  camera.position.z = 3000 * Math.cos(radian);
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
