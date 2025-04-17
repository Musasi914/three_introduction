import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
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
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 2000);
camera.position.set(10, 1, 10);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const anbLight = new THREE.AmbientLight(0x333333);
scene.add(anbLight);

const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2, 0, 0);
spotLight.position.set(-10000, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);

scene.add(new THREE.GridHelper(600));
scene.add(new THREE.AxesHelper(300));

const textureLOader = new THREE.TextureLoader();
const flagTexture = textureLOader.load(flagImg);
const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
const material = new THREE.ShaderMaterial({
  uniforms: {
    uFrequency: { value: new THREE.Vector2(10, 5) },
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("white") },
    uTexture: { value: flagTexture },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  transparent: true,
  side: THREE.DoubleSide,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

gui.add(material.uniforms.uFrequency.value, "x").min(0).max(20).step(0.001).name("frequencyX");
gui.add(material.uniforms.uFrequency.value, "y").min(0).max(20).step(0.001).name("frequencyY");

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
