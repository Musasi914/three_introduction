import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT);
camera.position.set(20, 20, 30);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// 床
const meshFloor = new THREE.Mesh(new THREE.BoxGeometry(2000, 0.1, 2000), new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0 }));
meshFloor.receiveShadow = true;
scene.add(meshFloor);

// おブフェ
const meshKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(3, 1, 100, 16),
  new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0 })
);
meshKnot.castShadow = true;
meshKnot.position.set(0, 5, 0);
scene.add(meshKnot);

// 点光源
const light = new THREE.PointLight(0xffffff, 5, 50, 0.4);
light.castShadow = true;
scene.add(light);

const lightHelper = new THREE.PointLightHelper(light);
scene.add(lightHelper);

// render
function animate() {
  renderer.render(scene, camera);
  const t = Date.now() / 500;
  const r = 10;
  const lx = r * Math.cos(t);
  const lz = r * Math.sin(t);
  const ly = 6 + 5 * Math.sin(t / 2);
  light.position.set(lx, ly, lz);
  light.lookAt(0, 0, 0);
}

if (WebGL.isWebGL2Available()) {
  renderer.setAnimationLoop(animate);
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.body.appendChild(warning);
}
