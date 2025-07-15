import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
// import * as CANNON from "cannon-es";
import vertexShader from "/shader/threejs-journy/firework/vertexShader.glsl?raw";
import fragmentShader from "/shader/threejs-journy/firework/fragmentShader.glsl?raw";
import gsap from "gsap";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [2, 2, 2];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
  resolution: new THREE.Vector2(
    window.innerWidth * Math.min(window.devicePixelRatio, 2),
    window.innerHeight * Math.min(window.devicePixelRatio, 2)
  ),
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
  SIZES.pixelRatio = Math.min(window.devicePixelRatio, 2);
  SIZES.resolution.set(SIZES.width * SIZES.pixelRatio, SIZES.height * SIZES.pixelRatio);

  camera.aspect = SIZES.width / SIZES.height;
  camera.updateProjectionMatrix();

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(SIZES.pixelRatio);
}

function setControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  return controls;
}

let material: THREE.ShaderMaterial;

function createFirework(count: number, position: THREE.Vector3, size: number, texture: THREE.Texture, radius: number, color: THREE.Color) {
  const positionsArray = new Float32Array(count * 3);
  const sizesArray = new Float32Array(count);
  const timeMultiplierArray = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    // 球状にランダム配置
    // const spherical = new THREE.Spherical(radius, Math.random() * Math.PI, Math.random() * Math.PI * 2);
    // position.setFromSpherical(spherical);

    // 球状に規則正しく配置
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI * 2) * phi;
    const x = Math.cos(theta) * Math.sin(phi);
    const y = Math.sin(theta) * Math.sin(phi);
    const z = Math.cos(phi);
    const position = new THREE.Vector3(x, y, z);
    position.multiplyScalar(radius);

    positionsArray[i * 3] = position.x;
    positionsArray[i * 3 + 1] = position.y;
    positionsArray[i * 3 + 2] = position.z;

    sizesArray[i] = Math.random() * 0.5 + 0.5;
    timeMultiplierArray[i] = Math.random() + 1;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positionsArray, 3));
  geometry.setAttribute("size", new THREE.BufferAttribute(sizesArray, 1));
  geometry.setAttribute("timeMultiplier", new THREE.BufferAttribute(timeMultiplierArray, 1));

  material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uSize: new THREE.Uniform(size),
      uResolution: new THREE.Uniform(SIZES.resolution),
      uTexture: new THREE.Uniform(texture),
      uColor: new THREE.Uniform(color),
      uProgress: new THREE.Uniform(0),
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const firework = new THREE.Points(geometry, material);
  firework.position.copy(position);
  scene.add(firework);

  gsap.to(material.uniforms.uProgress, {
    value: 1,
    duration: 3,
    ease: "none",
    onComplete: () => {
      destroyFirework(firework, geometry, material);
    },
  });
}

function destroyFirework(firework: THREE.Points, geometry: THREE.BufferGeometry, material: THREE.ShaderMaterial) {
  scene.remove(firework);
  material.dispose();
  geometry.dispose();
  console.log("destroy");
}

function loadTextures() {
  const textures = [
    textureLoader.load("/textures/particles/1.png"),
    textureLoader.load("/textures/particles/2.png"),
    textureLoader.load("/textures/particles/3.png"),
    textureLoader.load("/textures/particles/4.png"),
    textureLoader.load("/textures/particles/5.png"),
    textureLoader.load("/textures/particles/6.png"),
    textureLoader.load("/textures/particles/7.png"),
    textureLoader.load("/textures/particles/8.png"),
    textureLoader.load("/textures/particles/9.png"),
    textureLoader.load("/textures/particles/10.png"),
    textureLoader.load("/textures/particles/11.png"),
    textureLoader.load("/textures/particles/12.png"),
    textureLoader.load("/textures/particles/13.png"),
  ];

  textures.forEach((texture) => {
    texture.flipY = false;
  });

  return textures;
}

function createRandomFirework(textures: THREE.Texture[]) {
  const count = Math.floor(Math.random() * 1000) + 400;
  const position = new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 2, (Math.random() - 0.5) * 2);
  const size = Math.random() * 0.1 + 0.1;
  const texture = textures[Math.floor(Math.random() * textures.length)];
  const radius = Math.random() + 1.5;
  const color = new THREE.Color(Math.random() * 0xffffff);
  createFirework(count, position, size, texture, radius, color);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  const textures = loadTextures();

  createFirework(100, new THREE.Vector3(0, 0, 0), 0.25, textures[9], 1, new THREE.Color(0x8affff));

  createRandomFirework(textures);

  window.addEventListener("resize", onWindowResize);
  window.addEventListener("click", () => {
    createRandomFirework(textures);
  });

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
