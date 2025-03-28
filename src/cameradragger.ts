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

// ------------------------------------------------------------------------

//geometry
// const geometry = new THREE.SphereGeometry(400, 30, 30);
const material = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});

// 平行光源
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// 環境光
const ambientLight = new THREE.AmbientLight(0x999999);
scene.add(ambientLight);

// 画像
// const loader = new THREE.TextureLoader();
// const texture = loader.load("/Environment_baseColor.png");
// texture.colorSpace = THREE.SRGBColorSpace;
// const material = new THREE.MeshStandardMaterial({ color: 0xff0000});

// mesh 登録
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

function animate() {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
