import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import vertexShader from "/shader/threejs-journy/earth/vertexShader.glsl?raw";
import fragmentShader from "/shader/threejs-journy/earth/fragmentShader.glsl?raw";
import vertexShader_a from "/shader/threejs-journy/earth-atmosphere/vertexShader.glsl?raw";
import fragmentShader_a from "/shader/threejs-journy/earth-atmosphere/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 25;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [12, 5, 4];

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
  return controls;
}

function setAxesHelper() {
  const axesHelper = new THREE.AxesHelper(20);
  scene.add(axesHelper);
}

const parameters = {
  phi: Math.PI / 2,
  theta: 0,
};
const sunSpherecal = new THREE.Spherical(1, parameters.phi, parameters.theta);
const sunPosition = new THREE.Vector3().setFromSpherical(sunSpherecal);
const updateSunPosition = () => {
  sunSpherecal.phi = parameters.phi;
  sunSpherecal.theta = parameters.theta;
  sunPosition.setFromSpherical(sunSpherecal);
  earthMaterial.uniforms.uSunPosition.value.copy(sunPosition);
  sun.position.set(sunPosition.x, sunPosition.y, sunPosition.z);
  sun.position.multiplyScalar(3);
  atmosphereMaterial.uniforms.uSunPosition.value.copy(sunPosition);
};
gui.add(parameters, "phi").min(0).max(Math.PI).step(0.001).onChange(updateSunPosition);
gui
  .add(parameters, "theta")
  .min(0)
  .max(Math.PI * 2)
  .step(0.001)
  .onChange(updateSunPosition);

let sun: THREE.Mesh;

function createDammySun() {
  const sunGeometry = new THREE.SphereGeometry(0.1, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.position.set(sunPosition.x, sunPosition.y, sunPosition.z);
  sun.position.multiplyScalar(3);
  scene.add(sun);
}

let earthMaterial: THREE.ShaderMaterial;
let earthGeometry: THREE.SphereGeometry;
let earth: THREE.Mesh;

const earthParameters = {
  atmosphereDayColor: "#00aaff",
  atmosphereNightColor: "#ff6600",
};

gui.addColor(earthParameters, "atmosphereDayColor").onChange((value: THREE.Color) => {
  earthMaterial.uniforms.uAtmosphereDayColor.value.set(value);
  atmosphereMaterial.uniforms.uAtmosphereDayColor.value.set(value);
});
gui.addColor(earthParameters, "atmosphereNightColor").onChange((value: THREE.Color) => {
  earthMaterial.uniforms.uAtmosphereNightColor.value.set(value);
  atmosphereMaterial.uniforms.uAtmosphereNightColor.value.set(value);
});
function createEarth() {
  const earthDayTexture = textureLoader.load("/textures/earth/day.jpg");
  earthDayTexture.colorSpace = THREE.SRGBColorSpace;
  earthDayTexture.anisotropy = 8;
  const earthNightTexture = textureLoader.load("/textures/earth/night.jpg");
  earthNightTexture.colorSpace = THREE.SRGBColorSpace;
  earthNightTexture.anisotropy = 8;
  const earthSpecularCloudsTexture = textureLoader.load("/textures/earth/specularClouds.jpg");
  earthSpecularCloudsTexture.anisotropy = 8;

  earthGeometry = new THREE.SphereGeometry(2, 64, 64);
  earthMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uDayTexture: new THREE.Uniform(earthDayTexture),
      uNightTexture: new THREE.Uniform(earthNightTexture),
      uSpecularCloudsTexture: new THREE.Uniform(earthSpecularCloudsTexture),
      uSunPosition: new THREE.Uniform(sunPosition),
      uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereDayColor)),
      uAtmosphereNightColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereNightColor)),
    },
  });
  earth = new THREE.Mesh(earthGeometry, earthMaterial);
  scene.add(earth);
}

let atmosphereMaterial: THREE.ShaderMaterial;

function createAtmosphere() {
  atmosphereMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader_a,
    fragmentShader: fragmentShader_a,
    uniforms: {
      uSunPosition: new THREE.Uniform(sunPosition),
      uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereDayColor)),
      uAtmosphereNightColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereNightColor)),
    },
    side: THREE.BackSide,
    transparent: true,
  });
  const atmosphere = new THREE.Mesh(earthGeometry, atmosphereMaterial);
  atmosphere.scale.setScalar(1.04);
  scene.add(atmosphere);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  createEarth();
  createDammySun();
  createAtmosphere();

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

  // Update Earth
  earth.rotation.y = elapsedTime * 0.1;

  // Render
  renderer.render(scene, camera);
}

init();
