import * as THREE from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 9999);
camera.position.set(0, 0, 1000);

// 光源

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

// レンダー
function animate() {
  camera.lookAt(0, 0, 0);

  // controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
