import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
// import * as CANNON from "cannon-es";
import vertexShader from "/shader/threejs-journy/hologram/vertexShader.glsl?raw";
import fragmentShader from "/shader/threejs-journy/hologram/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [0, 2, 6];

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

function setControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.set(0, 0.75, 0);
  return controls;
}

function createLights() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.set(1024, 1024);
  directionalLight.shadow.camera.far = 15;
  directionalLight.shadow.camera.left = -7;
  directionalLight.shadow.camera.top = 7;
  directionalLight.shadow.camera.right = 7;
  directionalLight.shadow.camera.bottom = -7;
  directionalLight.position.set(5, 5, 5);

  return { ambientLight, directionalLight };
}

function createFloor() {
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
      color: "#444444",
      metalness: 0,
      roughness: 0.5,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;

  return floor;
}

let trusknot: THREE.Mesh;
let box: THREE.Mesh;
let sphere: THREE.Mesh;
let material: THREE.ShaderMaterial;

function createObjects() {
  material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
    },
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  trusknot = new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.4, 100, 16), material);
  trusknot.position.set(0, 0, 0);
  scene.add(trusknot);

  box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
  box.position.set(4, 0, 0);
  scene.add(box);

  sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material);
  sphere.position.set(-4, 0, 0);
  scene.add(sphere);

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 32, 32), material);
  plane.position.z = 4;
  scene.add(plane);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  // const { ambientLight, directionalLight } = createLights();
  // scene.add(ambientLight, directionalLight);

  // const floor = createFloor();
  // scene.add(floor);

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

  material.uniforms.uTime.value = elapsedTime;

  trusknot.rotation.x = -elapsedTime * 0.1;
  trusknot.rotation.y = elapsedTime * 0.2;
  box.rotation.x = -elapsedTime * 0.1;
  box.rotation.y = elapsedTime * 0.2;
  sphere.rotation.x = -elapsedTime * 0.1;
  sphere.rotation.y = elapsedTime * 0.2;

  // Render
  renderer.render(scene, camera);
}

init();
