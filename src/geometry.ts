import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { BufferGeometryUtils, ThreeMFLoader } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// 準備
const renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 1, 10000);
camera.position.set(0, 300, 1000);
camera.lookAt(0, 0, 0);

const container = new THREE.Object3D();
scene.add(container);

// ------------------------------------------------------------------------

//geometry
// const geometry = new THREE.SphereGeometry(400, 30, 30);
const material = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});
// ジオメトリを作成
const geometryList = [
  new THREE.SphereGeometry(50), // 球体
  new THREE.BoxGeometry(100, 100, 100), // 直方体
  new THREE.PlaneGeometry(100, 100), // 平面
  // new THREE.TetrahedronGeometry(100, 0), // 三角錐
  new THREE.ConeGeometry(100, 100, 32), // 円錐
  new THREE.CylinderGeometry(50, 50, 100, 32), // 円柱
  new THREE.TorusGeometry(50, 30, 16, 100), // ドーナツ形状
];

// 平行光源
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// 環境光
const ambientLight = new THREE.AmbientLight(0x999999);
scene.add(ambientLight);

scene.add(new THREE.GridHelper(600));
scene.add(new THREE.AxesHelper(300));

const boxes: THREE.BufferGeometry<THREE.NormalBufferAttributes>[] = [];

geometryList.map((geometry, i) => {
  const geometryTranslated = geometry.translate(
    400 * Math.cos((i / geometryList.length) * Math.PI * 2),
    0,
    400 * Math.sin((i / geometryList.length) * Math.PI * 2)
  );
  boxes.push(geometryTranslated);
});

const geometry = BufferGeometryUtils.mergeGeometries(boxes);
scene.add(new THREE.Mesh(geometry, material));

const stats: Stats = new Stats();
stats.dom.style.position = "absolute";
stats.dom.style.top = "0px";
document.body.appendChild(stats.dom);

// カメラ
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const info: HTMLElement | null = document.getElementById("info");

function animate() {
  // レンダリング情報を画面に表示
  if (!info) throw new Error("infoがみつからん");
  info.innerHTML = JSON.stringify(renderer.info.render, null, "    ");

  controls.update();
  stats.update();

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
