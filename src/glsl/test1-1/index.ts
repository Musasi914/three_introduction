import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";
import GUI from "lil-gui";
import flagImg from "./textures/jp-flag.png";

const gui = new GUI();

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: devicePixelRatio === 1 });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 2000);
camera.position.set(10, 5, 10);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

//-----------//-----------//-----------//-----------//-----------

// const anbLight = new THREE.AmbientLight(0xffffff);
// scene.add(anbLight);

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.castShadow = true;
// light.position.set(0, 1, 0);
// scene.add(light);

//-----------//-----------//-----------//-----------//-----------

scene.add(new THREE.GridHelper(600));
scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(flagImg);

const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
const material = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uFrequency: { value: 10.0 },
    uAmplitude: { value: 0.2 },
    uTexture: { value: texture },
  },
  vertexShader,
  fragmentShader,
  transparent: true,
  side: THREE.DoubleSide,
});
const mesh = new THREE.Mesh(geometry, material);
// mesh.castShadow = true;
// mesh.receiveShadow = true;
scene.add(mesh);

//-----------//-----------//-----------//-----------//-----------

gui.add(material.uniforms.uFrequency, "value", 0, 100, 1).name("uFrequency");
gui.add(material.uniforms.uAmplitude, "value", 0, 1, 0.01).name("uAmplitude");

//-----------//-----------//-----------//-----------//-----------

const clock = new THREE.Clock();

function animate() {
  const elapsedTime = clock.getElapsedTime();

  material.uniforms.uTime.value = elapsedTime;

  controls.update();

  renderer.render(scene, camera);
}

if (WebGL.isWebGL2Available()) {
  renderer.setAnimationLoop(animate);
} else {
  throw new Error("WebGLがつかえない");
}

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
});
