import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Scene
const scene = new THREE.Scene();

/**
 * Lights
 */
function setLlight() {
  // AmbientLight
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  gui.add(ambientLight, "intensity", 0, 1, 0.01);
  scene.add(ambientLight);

  // DirectionalLight
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(2, 2, -1);
  gui.add(directionalLight, "intensity", 0, 3, 0.001);
  gui.add(directionalLight.position, "x", -5, 5, 0.01);
  gui.add(directionalLight.position, "y", -5, 5, 0.01);
  scene.add(directionalLight);

  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;

  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 6;
  directionalLight.shadow.camera.top = 2;
  directionalLight.shadow.camera.bottom = -2;
  directionalLight.shadow.camera.left = -2;
  directionalLight.shadow.camera.right = 2;
  directionalLight.shadow.radius = 9;

  const directrionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
  directrionalLightCameraHelper.visible = false;
  scene.add(directrionalLightCameraHelper);

  // SpotLight
  const spotLight = new THREE.SpotLight(0xffffff, 10.5, 10, Math.PI * 0.3);
  spotLight.position.set(0, 2, 2);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.far = 6;
  spotLight.shadow.camera.near = 1;
  scene.add(spotLight);

  const spotLightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
  spotLightCameraHelper.visible = false;
  scene.add(spotLightCameraHelper);

  // PointLight
  const pointLight = new THREE.PointLight(0xffffff, 2.7);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  pointLight.shadow.camera.near = 0.1;
  pointLight.shadow.camera.far = 5;
  pointLight.position.set(-1, 1, 0);
  scene.add(pointLight);

  const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera);
  pointLightCameraHelper.visible = false;
  scene.add(pointLightCameraHelper);
}
setLlight();
/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial();
material.roughness = 0.4;

// Objects
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
sphere.castShadow = true;

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.65;
plane.receiveShadow = true;

scene.add(sphere, plane);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ antialias: true });
document.body.appendChild(renderer.domElement);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
