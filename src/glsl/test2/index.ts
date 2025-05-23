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
camera.position.set(0, 0.23, 0);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// orbitcontrols
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

//-----------//-----------//-----------//-----------//-----------

const anbLight = new THREE.AmbientLight(0xffffff);
scene.add(anbLight);

const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2, 0, 0);
spotLight.position.set(-10000, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);

//-----------//-----------//-----------//-----------//-----------

// scene.add(new THREE.GridHelper(600));
// scene.add(new THREE.AxesHelper(300));

const textureLoader = new THREE.TextureLoader();
const skyTexture = textureLoader.load(skyImg);
skyTexture.wrapT = THREE.RepeatWrapping;
scene.background = skyTexture;

const geometry = new THREE.PlaneGeometry(10, 10, 512, 512);

const colorObject = {
  depthColor: "#2d81ae",
  surfaceColor: "#66c1f9",
};

const material = new THREE.ShaderMaterial({
  uniforms: {
    uWaveLength: { value: 0.38 },
    uFrequency: { value: new THREE.Vector2(6.6, 3.5) },
    uTime: { value: 0 },
    uWaveSpeed: { value: 0.75 },
    uDepthColor: { value: new THREE.Color(colorObject.depthColor) },
    uSurfaceColor: { value: new THREE.Color(colorObject.surfaceColor) },
    uColorOffset: { value: 0.13 },
    uColorMultiplier: { value: 9 },
    uSmallWaveElevation: { value: 0.15 },
    uSmallWaveFrequency: { value: 3.0 },
    uSmallWaveSpeed: { value: 0.2 },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = -Math.PI / 2;
scene.add(mesh);

gui.add(material.uniforms.uWaveLength, "value", 0, 1, 0.01).name("uWaveLength");
gui.add(material.uniforms.uFrequency.value, "x", 0, 10, 0.01).name("uFrequencyX");
gui.add(material.uniforms.uFrequency.value, "y", 0, 10, 0.01).name("uFrequencyY");
gui.add(material.uniforms.uWaveSpeed, "value", 0, 4, 0.01).name("uWaveSpeed");
gui.addColor(colorObject, "depthColor").onChange((value: string) => {
  material.uniforms.uDepthColor.value.set(value);
});
gui.addColor(colorObject, "surfaceColor").onChange((value: string) => {
  material.uniforms.uSurfaceColor.value.set(value);
});
gui.add(material.uniforms.uColorOffset, "value", 0, 1, 0.001).name("uColorOffset");
gui.add(material.uniforms.uColorMultiplier, "value", 0, 10, 0.001).name("uColorMultiplier");
gui.add(material.uniforms.uSmallWaveElevation, "value", 0, 1, 0.001).name("uSmallWaveElevation");
gui.add(material.uniforms.uSmallWaveFrequency, "value", 0, 10, 0.001).name("uSmallWaveFrequency");
gui.add(material.uniforms.uSmallWaveSpeed, "value", 0, 1, 0.001).name("uSmallWaveSpeed");

//-----------//-----------//-----------//-----------//-----------

const clock = new THREE.Clock();

function animate() {
  const elapsedTime = clock.getElapsedTime();
  material.uniforms.uTime.value = elapsedTime;

  camera.position.x = Math.sin(elapsedTime * 0.17) * 3.0;
  camera.position.z = Math.cos(elapsedTime * 0.17) * 3.0;

  camera.lookAt(Math.cos(elapsedTime), Math.sin(elapsedTime) * 0.5, Math.sin(elapsedTime) * 0.4);

  // controls.update();

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
