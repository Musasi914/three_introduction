import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
// renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 2000);
camera.position.set(250, 100, 250);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// const anbLight = new THREE.AmbientLight(0xdddddd);
// scene.add(anbLight);

const directLight = new THREE.DirectionalLight(0xffffff, 1);
directLight.position.set(0, 1, 1);
scene.add(directLight);

//-----------//-----------//-----------//-----------//-----------

const geometry = new THREE.BoxGeometry(20, 20, 20);
const meshs: THREE.Mesh[] = [];
for (let i = 0; i < 100; i++) {
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xffffff }));
  mesh.position.set(Math.random() * 200, Math.random() * 200, Math.random() * 200);
  mesh.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
  scene.add(mesh);
  meshs.push(mesh);
}

//-----------//-----------//-----------//-----------//-----------

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

window.addEventListener("pointermove", (e) => {
  pointer.x = (e.clientX / WIDTH) * 2 - 1;
  pointer.y = -(e.clientY / HEIGHT) * 2 + 1;
});

//-----------//-----------//-----------//-----------//-----------
let intersectingObject: THREE.Mesh | null;
function animate() {
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(meshs);

  if (intersects.length > 0) {
    if (intersects[0].object !== intersectingObject) {
      if (intersectingObject && intersectingObject.material instanceof THREE.MeshStandardMaterial) {
        intersectingObject.material.color.set(0xffffff);
      }
      intersectingObject = intersects[0].object as THREE.Mesh;
      if (intersectingObject.material instanceof THREE.MeshStandardMaterial) {
        intersectingObject.material.color.set(0xff0000);
      }
    }
  } else {
    if (intersectingObject && intersectingObject.material instanceof THREE.MeshStandardMaterial) {
      intersectingObject.material.color.set(0xffffff);
    }
    intersectingObject = null;
  }

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
});
