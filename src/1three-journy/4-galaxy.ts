import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

let geometry: THREE.BufferGeometry;
let material: THREE.PointsMaterial;
let points: THREE.Points;

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
const parameters = {
  count: 100000,
  size: 0.01,
  radius: 5,
  branches: 3,
  spin: 1,
  randomness: 0.2,
  randomnessPower: 2,
  insideColor: 0xff6030,
  outsideColor: 0x1b3984,
};
gui.add(parameters, "count", 100, 1000000, 100).onFinishChange(generateGalaxy);
gui.add(parameters, "size", 0.001, 0.1, 0.001).onFinishChange(generateGalaxy);
gui.add(parameters, "radius", 0.01, 20, 0.01).onFinishChange(generateGalaxy);
gui.add(parameters, "branches", 3, 20, 1).onFinishChange(generateGalaxy);
gui.add(parameters, "spin", -5, 5, 1).onFinishChange(generateGalaxy);
gui.add(parameters, "randomness", 0, 2, 0.001).onFinishChange(generateGalaxy);
gui.add(parameters, "randomnessPower", 1, 10, 0.001).onFinishChange(generateGalaxy);
gui.addColor(parameters, "insideColor");
gui.addColor(parameters, "outsideColor");

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
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  document.body.appendChild(renderer.domElement);

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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

function createLights() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0x86cdff, 0.275);

  // Directional light
  const directionalLight = new THREE.DirectionalLight(0x86cdff, 1);
  directionalLight.position.set(3, 2, -8);

  return { ambientLight, directionalLight };
}

function generateGalaxy() {
  if (points) {
    material.dispose();
    geometry.dispose();
    scene.remove(points);
  }

  // Geometry
  geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(parameters.count * 3);
  const color = new Float32Array(parameters.count * 3);

  const insideColor = new THREE.Color(parameters.insideColor);
  const outsideColor = new THREE.Color(parameters.outsideColor);

  for (let i = 0; i < parameters.count; i++) {
    const radius = Math.random() * parameters.radius;
    const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;
    const spinAngle = radius * parameters.spin;

    const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * radius * parameters.randomness;
    const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * radius * parameters.randomness;
    const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * radius * parameters.randomness;

    vertices[i * 3] = radius * Math.cos(branchAngle + spinAngle) + randomX;
    vertices[i * 3 + 1] = randomY;
    vertices[i * 3 + 2] = radius * Math.sin(branchAngle + spinAngle) + randomZ;

    const mixColor = insideColor.clone();
    mixColor.lerp(outsideColor, radius / parameters.radius);

    color[i * 3] = mixColor.r;
    color[i * 3 + 1] = mixColor.g;
    color[i * 3 + 2] = mixColor.b;
  }
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(color, 3));

  // Material
  material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  // add Mesh
  points = new THREE.Points(geometry, material);
  scene.add(points);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  const { ambientLight, directionalLight } = createLights();
  scene.add(ambientLight, directionalLight);

  generateGalaxy();

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
