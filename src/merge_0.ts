import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { BufferGeometryUtils, TextureHelper } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

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
// controls.autoRotate = true;
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

// 1辺あたりに配置するオブジェクトの個数
const CELL_NUM = 20;

// 結合用
const boxes = [];

for (let i = 0; i < CELL_NUM; i++) {
  for (let j = 0; j < CELL_NUM; j++) {
    for (let k = 0; k < CELL_NUM; k++) {
      const geometryBox = new THREE.BoxGeometry(5, 5, 5);

      // XYZ座標を設定
      const geometryTranslated = geometryBox.translate(10 * (i - CELL_NUM / 2), 10 * (j - CELL_NUM / 2), 10 * (k - CELL_NUM / 2));

      boxes.push(geometryTranslated);
    }
  }
}

const geometry = BufferGeometryUtils.mergeGeometries(boxes);

const material = new THREE.MeshNormalMaterial();

scene.add(new THREE.Mesh(geometry, material));

//-----------//-----------//-----------//-----------//-----------

const stats: Stats = new Stats();
stats.dom.style.position = "absolute";
stats.dom.style.top = "0px";
document.body.appendChild(stats.dom);

//-----------//-----------//-----------//-----------//-----------

const info: HTMLElement | null = document.getElementById("info");

function animate() {
  controls.update();
  stats.update();

  // レンダリング情報を画面に表示
  if (!info) throw new Error("infoがみつからん");
  info.innerHTML = JSON.stringify(renderer.info.render, null, "    ");

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
