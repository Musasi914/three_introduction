import * as THREE from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT);
camera.position.set(100, 150, 700);
camera.lookAt(0, 0, 0);

// 光源
// scene.add(new THREE.DirectionalLight(0xff0000, 2)); // 平行光源
// scene.add(new THREE.AmbientLight(0x00ffff)); // 環境光源

// 地面
scene.add(new THREE.GridHelper(600));
scene.add(new THREE.AxesHelper(300));

// グループ
const group = new THREE.Group();
scene.add(group);

let targetMesh = new THREE.Mesh();

for (let i = 0; i < 10; i++) {
  const geometry = new THREE.SphereGeometry(30, 30, 30);
  const material = i !== 0 ? new THREE.MeshBasicMaterial() : new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  const radian = (i / 10) * Math.PI * 2;
  mesh.position.set(200 * Math.cos(radian), 30, 200 * Math.sin(radian));

  group.add(mesh);

  if (i === 0) {
    targetMesh = mesh;
  }
}

const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(50, 50, 0)]);
const line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
scene.add(line);

// レンダー
function animate() {
  group.rotation.y += 0.05;

  const world = targetMesh.getWorldPosition(new THREE.Vector3());

  const positions = line.geometry.attributes.position.array;
  positions[0] = 0;
  positions[1] = 0;
  positions[2] = 0;
  positions[3] = world.x;
  positions[4] = world.y;
  positions[5] = world.z;
  line.geometry.attributes.position.needsUpdate = true;

  // controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
