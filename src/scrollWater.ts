import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 2000);
camera.position.set(250, 100, 250);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

const directLight = new THREE.DirectionalLight(0xffffff, 1);
directLight.position.set(0, 1, 1);
scene.add(directLight);

//-----------//-----------//-----------//-----------//-----------

scene.add(new THREE.GridHelper(600));
scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

function animate() {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
});
