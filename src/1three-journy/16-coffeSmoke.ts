import GUI from "lil-gui";
import * as THREE from "three";
import { GLTFLoader, OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import vertexShader from "/shader/threejs-journy/coffee/vertexShader.glsl?raw";
import fragmentShader from "/shader/threejs-journy/coffee/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [8, 10, 12];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
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
  const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio === 1 });

  document.body.appendChild(renderer.domElement);

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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
  controls.target.y = 3;
  return controls;
}

function loadGltf() {
  gltfLoader.load("/textures/models/coffee/bakedModel.glb", (gltf) => {
    const bakedMesh = gltf.scene.getObjectByName("baked");
    if (bakedMesh && (bakedMesh as THREE.Mesh).material && ((bakedMesh as THREE.Mesh).material as THREE.MeshStandardMaterial).map) {
      (((bakedMesh as THREE.Mesh).material as THREE.MeshStandardMaterial).map as THREE.Texture).anisotropy = 8;
    }
    scene.add(gltf.scene);
  });
}

let smokeMaterial: THREE.ShaderMaterial;

function createSmoke() {
  const perlinTexture = textureLoader.load("/textures/models/coffee/perlin.png");
  // perlinTexture.wrapS = THREE.RepeatWrapping;
  perlinTexture.wrapT = THREE.RepeatWrapping;

  const smokeGeometry = new THREE.PlaneGeometry(1, 1, 16, 64);
  smokeGeometry.translate(0, 0.5, 0);
  smokeGeometry.scale(1.5, 6, 1.5);

  smokeMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    // blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: new THREE.Uniform(0),
      uPerlinTexture: new THREE.Uniform(perlinTexture),
    },
  });

  const smoke = new THREE.Mesh(smokeGeometry, smokeMaterial);
  smoke.position.y = 1.83;
  scene.add(smoke);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  loadGltf();
  createSmoke();
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

  // Update Smoke
  if (smokeMaterial) {
    smokeMaterial.uniforms.uTime.value = elapsedTime;
  }

  // Render
  renderer.render(scene, camera);
}

init();
