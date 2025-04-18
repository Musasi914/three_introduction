import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import GUI from "lil-gui";
import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";
import skyImg from "./textures/sky.jpg";

const gui = new GUI();
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: devicePixelRatio === 1 });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.01, 100);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

//-----------//-----------//-----------//-----------//-----------

// const anbLight = new THREE.AmbientLight(0xffffff);
// scene.add(anbLight);

// const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2, 0, 0);
// spotLight.position.set(-10000, 0, 0);
// spotLight.castShadow = true;
// scene.add(spotLight);

//-----------//-----------//-----------//-----------//-----------

scene.add(new THREE.GridHelper(600));
scene.add(new THREE.AxesHelper(300));

const geometry = new THREE.PlaneGeometry(10, 10, 512, 512);
const material = new THREE.ShaderMaterial({
  uniforms: {
    uFrequency: { value: new THREE.Vector2(3.0, 2.0) },
    uAmplitude: { value: 0.4 },
    uTime: { value: 0 },
    uDepthColor: { value: new THREE.Color(0x000ddd) },
    uSurfaceColor: { value: new THREE.Color(0x00ffff) },
  },
  vertexShader,
  fragmentShader,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = -Math.PI / 2;
scene.add(mesh);

gui.add(material.uniforms.uFrequency.value, "x", 0, 10, 1).name("uFrequencyX");
gui.add(material.uniforms.uFrequency.value, "y", 0, 10, 1).name("uFrequencyY");
gui.add(material.uniforms.uAmplitude, "value", 0, 1, 0.01).name("uAmplitude");

//-----------//-----------//-----------//-----------//-----------

const clock = new THREE.Clock();

function animate() {
  material.uniforms.uTime.value = clock.getElapsedTime();
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
