import gsap from "gsap";
import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Sky, Timer } from "three/examples/jsm/Addons.js";

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

const gui = new GUI();
const textureLoader = new THREE.TextureLoader();
const timer = new Timer();

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

let particleGeometry: THREE.BufferGeometry;
const count = 5000;
function firstParticle() {
  // Geometry
  particleGeometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    vertices[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }
  particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  particleGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  // Material
  const particleTexture = textureLoader.load("/textures/particles/2.png");
  const particleMaterial = new THREE.PointsMaterial({
    size: 0.1,
    sizeAttenuation: true,
    transparent: true,
    alphaMap: particleTexture,
    // alphaTest: 0.001, // 「全くレンダリングしない」透明度を登録　よくよくみるとalphamapのエッジの部分が不自然になるだろう
    // depthTest: false, //　深度を考慮しない 一つの色やparticleしか使わないときとか役立つだろう
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  return particles;
}

function tick() {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();

  // Update Particles
  // for (let i = 0; i < count; i++) {
  //   const i3 = i * 3;
  //   const x = particleGeometry.attributes.position.array[i3];
  //   const z = particleGeometry.attributes.position.array[i3 + 2];
  //   particleGeometry.attributes.position.array[i3 + 1] = Math.sin(x + elapsedTime);
  // }

  // particleGeometry.attributes.position.needsUpdate = true;

  // Update Controls
  controls.update();

  // Render
  renderer.render(scene, camera);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  const { ambientLight, directionalLight } = createLights();
  scene.add(ambientLight, directionalLight);

  firstParticle();

  window.addEventListener("resize", onWindowResize);

  render();
}

function render() {
  renderer.setAnimationLoop(() => {
    tick();
  });
}

init();

`
別になんの技お娶りを使ってもいいが、
PointsMaterialを使う
`;
