import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer();
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.01, 10000);
camera.position.set(0, 0, 1000);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// const anbLight = new THREE.AmbientLight(0xffffff);
// scene.add(anbLight);

const directLight = new THREE.DirectionalLight(0xffffff);
directLight.position.set(1, 1, 1);
scene.add(directLight);

//-----------//-----------//-----------//-----------//-----------

const geometry = new THREE.BoxGeometry(50, 50, 50);

const meshList: THREE.Mesh[] = [];

for (let i = 0; i < 200; i++) {
  const material = new THREE.MeshStandardMaterial();
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.x = 1000 * (Math.random() - 0.5);
  mesh.position.y = 1000 * (Math.random() - 0.5);
  mesh.position.z = 1000 * (Math.random() - 0.5);
  mesh.rotation.x = Math.random() * Math.PI * 2;
  mesh.rotation.y = Math.random() * Math.PI * 2;
  mesh.rotation.z = Math.random() * Math.PI * 2;

  scene.add(mesh);

  meshList.push(mesh);
}

//-----------//-----------//-----------//-----------//-----------

const raycaster = new THREE.Raycaster();

const mouse = new THREE.Vector2();

renderer.domElement.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const w = (event?.currentTarget as HTMLCanvasElement).offsetWidth;
  const h = (event?.currentTarget as HTMLCanvasElement).offsetHeight;

  mouse.x = (x / w) * 2 - 1;
  mouse.y = -(y / h) * 2 + 1;
});

//-----------//-----------//-----------//-----------//-----------

function animate() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(meshList);

  meshList.map((mesh) => {
    if (mesh.material instanceof THREE.MeshStandardMaterial) {
      if (intersects.length > 0 && mesh === intersects[0].object) {
        mesh.material.color.set(0xff0000);
      } else {
        mesh.material.color.set(0xffffff);
      }
    }
  });

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
