import GUI from "lil-gui";
import * as THREE from "three";
import { GLTFLoader, OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import vertexShader from "/shader/threejs-journy/halftone/vertexShader.glsl?raw";
import fragmentShader from "/shader/threejs-journy/halftone/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [7, 7, 7];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
};

const textureLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();

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
  const rendererParameters = {
    clearColor: "#26132f",
  };
  const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio === 1 });

  document.body.appendChild(renderer.domElement);

  renderer.setClearColor(rendererParameters.clearColor);
  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(SIZES.pixelRatio);

  gui.addColor(rendererParameters, "clearColor").onChange(() => {
    renderer.setClearColor(rendererParameters.clearColor);
  });

  return renderer;
}

function onWindowResize() {
  SIZES.width = window.innerWidth;
  SIZES.height = window.innerHeight;
  SIZES.pixelRatio = Math.min(window.devicePixelRatio, 2);

  camera.aspect = SIZES.width / SIZES.height;
  camera.updateProjectionMatrix();

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(SIZES.pixelRatio);
}

function setControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.set(0, 0.75, 0);
  return controls;
}

let suzanne: THREE.Group;
let torusKnot: THREE.Mesh;
let sphere: THREE.Mesh;

function createObjects() {
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      uColor: { value: new THREE.Color("#ff794d") },
      uResolution: { value: new THREE.Vector2(SIZES.width * SIZES.pixelRatio, SIZES.height * SIZES.pixelRatio) },
    },
  });

  torusKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.6, 0.25, 128, 32), material);
  torusKnot.position.x = 3;
  scene.add(torusKnot);

  sphere = new THREE.Mesh(new THREE.SphereGeometry(), material);
  sphere.position.x = -3;
  scene.add(sphere);

  gltfLoader.load("/textures/models/suzanne.glb", (gltf) => {
    suzanne = gltf.scene;
    suzanne.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = material;
      }
    });
    scene.add(suzanne);
  });
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  createObjects();

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

  if (suzanne) {
    suzanne.rotation.x = -elapsedTime * 0.1;
    suzanne.rotation.y = elapsedTime * 0.2;
  }

  sphere.rotation.x = -elapsedTime * 0.1;
  sphere.rotation.y = elapsedTime * 0.2;

  torusKnot.rotation.x = -elapsedTime * 0.1;
  torusKnot.rotation.y = elapsedTime * 0.2;

  // Render
  renderer.render(scene, camera);
}

init();
