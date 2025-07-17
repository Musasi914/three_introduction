import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
// import * as CANNON from "cannon-es";
import vertexShader from "/shader/threejs-journy/cursor/vertexShader.glsl?raw";
import fragmentShader from "/shader/threejs-journy/cursor/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 45;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [0, 0, 18];

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
  renderer.setClearColor("#181818");
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
  return controls;
}

function createParticles() {
  const texture = textureLoader.load("/textures/cursor-anim/picture-1.png");

  const particlesGeometry = new THREE.PlaneGeometry(10, 10, 128, 128);
  particlesGeometry.setIndex(null);

  const intensitiesArray = new Float32Array(particlesGeometry.attributes.position.count);
  const anglesArray = new Float32Array(particlesGeometry.attributes.position.count);
  for (let i = 0; i < intensitiesArray.length; i++) {
    intensitiesArray[i] = Math.random();
    anglesArray[i] = Math.random() * Math.PI * 2;
  }
  particlesGeometry.setAttribute("aIntensity", new THREE.BufferAttribute(intensitiesArray, 1));
  particlesGeometry.setAttribute("aAngle", new THREE.BufferAttribute(anglesArray, 1));

  const particlesMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uResolution: new THREE.Uniform(new THREE.Vector2(SIZES.width * window.devicePixelRatio, SIZES.height * window.devicePixelRatio)),
      uPictureTexture: new THREE.Uniform(texture),
      uDisplacementTexture: new THREE.Uniform(displacement.texture),
    },
    blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
}

const displacement = {
  canvas: document.createElement("canvas"),
  context: null,
  growImage: new Image(),
  interactivePlane: new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshBasicMaterial({ color: "red" })),
  raycaster: new THREE.Raycaster(),
  screenCursor: new THREE.Vector2(9999, 9999),
  canvasCursor: new THREE.Vector2(9999, 9999),
  texture: null,
} as {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  growImage: HTMLImageElement;
  interactivePlane: THREE.Mesh;
  raycaster: THREE.Raycaster;
  screenCursor: THREE.Vector2;
  canvasCursor: THREE.Vector2;
  texture: THREE.CanvasTexture | null;
};

displacement.interactivePlane.visible = false;

const growSize = displacement.canvas.width / 8;

function createCanvas() {
  const ctx = displacement.canvas.getContext("2d");
  if (!ctx) return;
  displacement.context = ctx;

  scene.add(displacement.interactivePlane);

  displacement.growImage.src = "/textures/cursor-anim/glow.png";
  // displacement.growImage.onload = () => {
  //   context.drawImage(displacement.growImage, 20, 20, 80, 80);
  // };

  displacement.canvas.style.position = "fixed";
  displacement.canvas.style.top = "0";
  displacement.canvas.style.left = "0";
  displacement.canvas.style.zIndex = "1000";
  displacement.canvas.style.pointerEvents = "none";
  displacement.canvas.style.width = "256px";
  displacement.canvas.style.height = "256px";
  displacement.canvas.width = 128;
  displacement.canvas.height = 128;

  displacement.context.fillRect(0, 0, displacement.canvas.width, displacement.canvas.height);

  displacement.texture = new THREE.CanvasTexture(displacement.canvas);

  document.body.appendChild(displacement.canvas);

  window.addEventListener("mousemove", (event) => {
    displacement.screenCursor.set((event.clientX / SIZES.width) * 2 - 1, -(event.clientY / SIZES.height) * 2 + 1);
  });
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  // const controls = setControls();
  // controls.update();

  createCanvas();
  createParticles();

  window.addEventListener("resize", onWindowResize);

  render();
}

function render() {
  renderer.setAnimationLoop(tick);
}

function tick() {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();

  // Update Controls
  // controls.update();

  displacement.context!.globalCompositeOperation = "source-over";
  displacement.context!.globalAlpha = 0.08;
  displacement.context!.fillRect(0, 0, displacement.canvas.width, displacement.canvas.height);

  // update raycaster
  displacement.raycaster.setFromCamera(displacement.screenCursor, camera);
  const intersects = displacement.raycaster.intersectObject(displacement.interactivePlane);
  if (intersects.length) {
    const uv = intersects[0].uv;
    if (uv) {
      displacement.canvasCursor.set(uv.x * displacement.canvas.width, displacement.canvas.height * (1 - uv.y));
      displacement.context!.globalCompositeOperation = "lighten";
      displacement.context!.globalAlpha = 1;

      displacement.context!.drawImage(
        displacement.growImage,
        displacement.canvasCursor.x - growSize / 2,
        displacement.canvasCursor.y - growSize / 2,
        growSize,
        growSize
      );
    }
  }
  displacement.texture!.needsUpdate = true;

  // Render
  renderer.render(scene, camera);
}

init();
