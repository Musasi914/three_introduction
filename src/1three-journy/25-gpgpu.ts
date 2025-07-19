import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
// import * as CANNON from "cannon-es";
// import vertexShader from "/shader/threejs-journy/galaxy/vertexShader.glsl?raw";
// import fragmentShader from "/shader/threejs-journy/galaxy/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [0, 2, 4];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
};

const textureLoader = new THREE.TextureLoader();

const timer = new Timer();
const gui = new GUI();

function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(cameraFov, SIZES.width / SIZES.height, cameraNear, cameraFar);
  camera.position.set(...cameraPosition);
  scene.add(camera);
  return camera;
}

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio === 1 });

  document.body.appendChild(renderer.domElement);

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ToneMapping Cimonさんは下3つをよく使うらしい
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  return renderer;
}

function onWindowResize() {
  SIZES.width = window.innerWidth;
  SIZES.height = window.innerHeight;
  SIZES.pixelRatio = Math.min(window.devicePixelRatio, 2);

  camera.aspect = SIZES.width / SIZES.height;
  camera.updateProjectionMatrix();

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function setControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.set(0, 0.75, 0);
  return controls;
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  window.addEventListener("resize", onWindowResize);

  render();
}

function render() {
  renderer.setAnimationLoop(() => {
    tick();
  });
}

function tick() {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();

  // Update Controls
  controls.update();

  // Render
  renderer.render(scene, camera);
}

init();
