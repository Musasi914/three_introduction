import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer, VertexTangentsHelper } from "three/examples/jsm/Addons.js";
import vertexShader from "../../shader/threejs-journy/sea-custom/vertexShader.glsl?raw";
import fragmentShader from "../../shader/threejs-journy/sea-custom/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [0, 1, 1];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

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
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  return renderer;
}

function onWindowResize() {
  SIZES.width = window.innerWidth;
  SIZES.height = window.innerHeight;

  camera.aspect = SIZES.width / SIZES.height;
  camera.updateProjectionMatrix();

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function setControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  return controls;
}

let waterMaterial: THREE.ShaderMaterial;
const debugObject = {
  depthColor: 0xff4000,
  surfaceColor: 0x151c37,
};

function createWater() {
  waterMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uBigWavesElevation: { value: 0.2 },
      uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
      uTime: { value: 0 },
      uBigWavesSpeed: { value: 0.75 },

      uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
      uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
      uColorOffset: { value: 0.925 },
      uColorMultiplier: { value: 1 },

      uSmallWavesElevation: { value: 0.15 },
      uSmallWavesFrequency: { value: 3 },
      uSmallWavesSpeed: { value: 0.2 },
      uSmallWavesIterations: { value: 4 },
    },
  });

  const geometry = new THREE.PlaneGeometry(2, 2, 512, 512);
  geometry.deleteAttribute("normal");
  geometry.deleteAttribute("uv");
  const floor = new THREE.Mesh(geometry, waterMaterial);

  floor.rotation.x = -Math.PI / 2;

  gui.add(floor.material.uniforms.uBigWavesElevation, "value", 0, 1, 0.001).name("uBigWavesElevation");
  gui.add(floor.material.uniforms.uBigWavesFrequency.value, "x", 0, 10, 0.001).name("uBigWavesFrequencyX");
  gui.add(floor.material.uniforms.uBigWavesFrequency.value, "y", 0, 10, 0.001).name("uBigWavesFrequencyY");
  gui.add(floor.material.uniforms.uBigWavesSpeed, "value", 0, 4, 0.001).name("uBigWavesSpeed");
  gui
    .addColor(debugObject, "depthColor")
    .name("depthColor")
    .onChange(() => {
      waterMaterial.uniforms.uDepthColor.value.set(debugObject.depthColor);
    });
  gui
    .addColor(debugObject, "surfaceColor")
    .name("surfaceColor")
    .onChange(() => {
      waterMaterial.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor);
    });
  gui.add(floor.material.uniforms.uColorOffset, "value", 0, 1, 0.001).name("uColorOffset");
  gui.add(floor.material.uniforms.uColorMultiplier, "value", 0, 10, 0.001).name("uColorMultiplier");
  gui.add(floor.material.uniforms.uSmallWavesElevation, "value", 0, 1, 0.001).name("uSmallWavesElevation");
  gui.add(floor.material.uniforms.uSmallWavesFrequency, "value", 0, 10, 0.001).name("uSmallWavesFrequency");
  gui.add(floor.material.uniforms.uSmallWavesSpeed, "value", 0, 4, 0.001).name("uSmallWavesSpeed");
  gui.add(floor.material.uniforms.uSmallWavesIterations, "value", 0, 10, 0.001).name("uSmallWavesIterations");

  return floor;
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  const floor = createWater();
  scene.add(floor);

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

  // Update utime
  waterMaterial.uniforms.uTime.value = elapsedTime;

  // Render
  renderer.render(scene, camera);
}

init();
