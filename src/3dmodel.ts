import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// 1, 準備
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(1, 1, 1);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// light
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1);
scene.add(light);

const directionalLight2 = new THREE.DirectionalLight(0xffffff);
directionalLight2.position.set(1, 0, 1);
scene.add(directionalLight2);

// webgl
const loader = new GLTFLoader();
const objects = await loader.loadAsync("/model-toycar/ToyCar.glb");
const model = objects.scene;
scene.add(model);

model.scale.set(30, 30, 30);

// orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

// rendering
function animate() {
  renderer.render(scene, camera);
}

if (WebGL.isWebGL2Available()) {
  renderer.setAnimationLoop(animate);
} else {
  throw new Error();
}
