import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: devicePixelRatio === 1 });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
// renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 2000);
camera.position.set(-250, 0, -250);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

//-----------//-----------//-----------//-----------//-----------

const anbLight = new THREE.AmbientLight(0x333333);
scene.add(anbLight);

const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2, 0, 0);
spotLight.position.set(-10000, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);

//-----------//-----------//-----------//-----------//-----------

scene.add(new THREE.GridHelper(600));
scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------

const stats: Stats = new Stats();
stats.dom.style.position = "absolute";
stats.dom.style.top = "0px";
document.body.appendChild(stats.dom);

const info: HTMLElement | null = document.getElementById("info");

//-----------//-----------//-----------//-----------//-----------

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
