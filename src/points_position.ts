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
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();
// scene.fog = new THREE.Fog(0x000000, 400, 1000);

//-----------//-----------//-----------//-----------//-----------

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.maxDistance = 1000; // ズーム最大距離

//-----------//-----------//-----------//-----------//-----------

// const anbLight = new THREE.AmbientLight(0xffffff);
// scene.add(anbLight);

const directLight = new THREE.DirectionalLight(0xffffff);
directLight.position.set(1, 1, 1);
scene.add(directLight);

//-----------//-----------//-----------//-----------//-----------

// scene.add(new THREE.GridHelper(600));
// scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

const vertices = [];

const LENGTH = 1000;

const speeds: THREE.Vector3[] = [];

for (let i = 0; i < LENGTH; i++) {
  vertices.push(0, 0, 0);

  const x = 2 * (Math.random() - 0.5);
  const y = 2 * (Math.random() - 0.5);
  const z = 2 * (Math.random() - 0.5);

  speeds.push(new THREE.Vector3(x, y, z));
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({
  size: 2,
  color: 0xffffff,
});

const mesh = new THREE.Points(geometry, material);
scene.add(mesh);

//-----------//-----------//-----------//-----------//-----------

function animate() {
  const position = mesh.geometry.attributes.position;

  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);

    const nextX = x + speeds[i].x;
    const nextY = y + speeds[i].y;
    const nextZ = z + speeds[i].z;

    position.setXYZ(i, nextX, nextY, nextZ);

    const length = new THREE.Vector3(x, y, z).length();
    if (length > 100) {
      position.setXYZ(i, 0, 0, 0);
    }
  }
  position.needsUpdate = true;

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
