import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import vertexShader from "/shader/threejs-journy/galaxy/vertexShader.glsl?raw";
import fragmentShader from "/shader/threejs-journy/galaxy/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 1000;
const cameraPosition: [number, number, number] = [4, 2, 5];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
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
  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // ToneMapping Cimonさんは下3つをよく使うらしい
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  gui.add(renderer, "toneMapping", {
    No: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACESFilmic: THREE.ACESFilmicToneMapping,
  });

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
window.addEventListener("resize", onWindowResize);

function setControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  return controls;
}

const parameters = {
  count: 100000,
  // size: 0.01,
  size: 4,
  radius: 5,
  branches: 3,
  spin: 1,
  randomness: 0.2,
  randomnessPower: 2,
  insideColor: 0xff6030,
  outsideColor: 0x1b3984,
};
gui.add(parameters, "count", 100, 1000000, 100).onFinishChange(generateGalaxy);
gui.add(parameters, "size", 0.001, 3, 0.001).onFinishChange(generateGalaxy);
gui.add(parameters, "radius", 0.01, 20, 0.01).onFinishChange(generateGalaxy);
gui.add(parameters, "branches", 3, 20, 1).onFinishChange(generateGalaxy);
gui.add(parameters, "spin", -5, 5, 1).onFinishChange(generateGalaxy);
gui.add(parameters, "randomness", 0, 2, 0.001).onFinishChange(generateGalaxy);
gui.add(parameters, "randomnessPower", 1, 10, 0.001).onFinishChange(generateGalaxy);
gui.addColor(parameters, "insideColor").onChange(generateGalaxy);
gui.addColor(parameters, "outsideColor").onChange(generateGalaxy);

let geometry: THREE.BufferGeometry;
let material: THREE.ShaderMaterial;
let points: THREE.Points;

function generateGalaxy() {
  const insideColor = new THREE.Color(parameters.insideColor);
  const outsideColor = new THREE.Color(parameters.outsideColor);
  if (points) {
    geometry.dispose();
    material.dispose();
    scene.remove(points);
  }
  const vertices = new Float32Array(parameters.count * 3);
  const colors = new Float32Array(parameters.count * 3);
  const scales = new Float32Array(parameters.count * 1);
  const randomness = new Float32Array(parameters.count * 3);

  for (let i = 0; i < parameters.count; i++) {
    const radius = Math.random() * parameters.radius;
    const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;
    // const spinAngle = radius * parameters.spin;

    const randomX = Math.pow(Math.random(), parameters.randomnessPower) * parameters.randomness * (Math.random() >= 0.5 ? -1 : 1) * radius;
    const randomY = Math.pow(Math.random(), parameters.randomnessPower) * parameters.randomness * (Math.random() >= 0.5 ? -1 : 1) * radius;
    const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * parameters.randomness * (Math.random() >= 0.5 ? -1 : 1) * radius;

    vertices[i * 3] = radius * Math.sin(branchAngle);
    vertices[i * 3 + 1] = 0;
    vertices[i * 3 + 2] = radius * Math.cos(branchAngle);

    randomness[i * 3] = randomX;
    randomness[i * 3 + 1] = randomY;
    randomness[i * 3 + 2] = randomZ;

    const color = insideColor.clone();
    color.lerp(outsideColor, radius / parameters.radius);

    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    scales[i] = Math.random();
  }

  geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute("aScale", new THREE.Float32BufferAttribute(scales, 1));
  geometry.setAttribute("aRandom", new THREE.Float32BufferAttribute(randomness, 3));

  material = new THREE.ShaderMaterial({
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader,
    fragmentShader,
    uniforms: {
      uSize: { value: 30 * renderer.getPixelRatio() },
      uTime: { value: 0 },
    },
  });

  points = new THREE.Points(geometry, material);
  scene.add(points);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  generateGalaxy();

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

  material.uniforms.uTime.value = elapsedTime;

  // Render
  renderer.render(scene, camera);
}

init();
