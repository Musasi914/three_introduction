import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);
renderer.shadowMap.enabled = true; // 影
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 9999);
camera.position.set(1000, 300, 1000);

// 光源
const spotLight = new THREE.SpotLight(0xffffff, 200, 2000, Math.PI / 5, 0.2, 0.5);
spotLight.position.set(500, 300, 500);
spotLight.castShadow = true; // 影
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;
scene.add(spotLight);

// 床
{
  const texture = new THREE.TextureLoader().load("/floor.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // リピート可能に
  texture.repeat.set(10, 10); // 10x10マスに設定
  texture.magFilter = THREE.NearestFilter; // アンチエイリアスを外す
  texture.colorSpace = THREE.SRGBColorSpace;

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0, metalness: 0.6 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true; // 影
  scene.add(floor);
}

// マス目
{
  const geometry = new THREE.BoxGeometry(45, 45, 45);
  const material = new THREE.MeshStandardMaterial({
    color: 0x22dd22,
    roughness: 0.1,
    metalness: 0.2,
  });

  for (let i = 0; i < 60; i++) {
    const box = new THREE.Mesh(geometry, material);
    box.position.x = Math.round((Math.random() - 0.5) * 19) * 50 + 25;
    box.position.y = 20;
    box.position.z = Math.round((Math.random() - 0.5) * 19) * 50 + 25;
    box.receiveShadow = true;
    box.castShadow = true;
    scene.add(box);
  }
}

// // orbitcontrols
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(0, 5, 0);
// controls.update();

let mouseX = 0;
let rot = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.pageX / WIDTH) * 360;
});

// レンダー
function animate() {
  // camera.position.x = 2000 * Math.sin(Date.now() / 2000);
  // camera.position.y = 500;
  // camera.position.z = 2000 * Math.cos(Date.now() / 2000);
  let targetRot = (mouseX * Math.PI) / 180;
  rot += (targetRot - rot) * 0.02;
  camera.position.x = 1000 * Math.sin(rot);
  camera.position.z = 1000 * Math.cos(rot);
  camera.lookAt(0, 0, 0);

  // controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
