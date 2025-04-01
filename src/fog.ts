import * as THREE from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT);
camera.position.set(0, 0, 1000);

// フォグ
scene.fog = new THREE.Fog(0x000000, 50, 2000);

// 光源
scene.add(new THREE.DirectionalLight(0xff0000, 2)); // 平行光源
scene.add(new THREE.AmbientLight(0x00ffff)); // 環境光源

// グループ
const group = new THREE.Group();
scene.add(group);
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshStandardMaterial();

for (let i = 0; i < 1000; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = (Math.random() - 0.5) * 2000;
  mesh.position.y = (Math.random() - 0.5) * 2000;
  mesh.position.z = (Math.random() - 0.5) * 2000;
  mesh.rotation.x = Math.random() * Math.PI * 2;
  mesh.rotation.y = Math.random() * Math.PI * 2;
  mesh.rotation.z = Math.random() * Math.PI * 2;
  group.add(mesh);
}

// レンダー
function animate() {
  group.rotateY(0.01);
  camera.lookAt(0, 0, 0);

  // controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
