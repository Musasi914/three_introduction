import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

// 1, 準備
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
const renderer = new THREE.WebGLRenderer();

camera.position.set(0, 0, 1300);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2, 物体を描画
const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x6699ff, roughness: 0 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// 光源
const light = new THREE.PointLight(0xffffff, 6000);
light.position.set(0, 0, 0);
scene.add(light);

// // ポイント光源
// const pointLight = new THREE.PointLight(0xffffff, 2, 100);
// scene.add(pointLight);
// const pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
// scene.add(pointLightHelper);

// 3, レンダリング
function animate() {
  renderer.render(scene, camera);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  // ライトを周回させる
  // pointLight.position.set(500 * Math.sin(Date.now() / 500), 500 * Math.sin(Date.now() / 1000), 500 * Math.cos(Date.now() / 500));
}

if (WebGL.isWebGL2Available()) {
  renderer.setAnimationLoop(animate);
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.body.appendChild(warning);
}
