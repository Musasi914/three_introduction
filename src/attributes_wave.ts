import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer();
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.01, 10000);
camera.position.set(-200, 0, -200);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

const controls = new OrbitControls(camera, renderer.domElement);
// controls.autoRotate = true;
controls.maxDistance = 1000; // ズーム最大距離

//-----------//-----------//-----------//-----------//-----------

const anbLight = new THREE.AmbientLight(0xffffff);
scene.add(anbLight);

const directLight = new THREE.DirectionalLight(0xffffff);
directLight.position.set(1, 1, 1);
scene.add(directLight);

//-----------//-----------//-----------//-----------//-----------

// scene.add(new THREE.GridHelper(600));
// scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

const geometry = new THREE.PlaneGeometry(400, 400, 20, 20);
const material = new THREE.MeshBasicMaterial({ wireframe: true });

const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = Math.PI / 2;
scene.add(mesh);

//-----------//-----------//-----------//-----------//-----------

function animate() {
  controls.update();

  const position = mesh.geometry.attributes.position;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);

    const nextZ = Math.sin(x * 0.02 + y * 0.02 + Date.now() * 0.001) * 20;

    position.setZ(i, nextZ);
  }
  position.needsUpdate = true;
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
