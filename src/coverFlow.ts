import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import "/css/coverFlow.css";
import gsap from "gsap";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const ITEM_W = 256;
const ITEM_H = 256;

const MAX_SLIDE = 44;

let currentPage = 0;

const MARGIN_X = 80;

const cards: THREE.Group[] = [];

//-----------//-----------//-----------//-----------//-----------

const renderer = new THREE.WebGLRenderer({ antialias: devicePixelRatio === 1 });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
const container = document.querySelector("#container") as HTMLElement;
container.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 2000);
camera.position.set(0, 0, 900);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

//-----------//-----------//-----------//-----------//-----------

// orbitcontrols
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

//-----------//-----------//-----------//-----------//-----------

const elementInput = document.querySelector("#rangeSlider") as HTMLInputElement;
elementInput.addEventListener("input", onInputChange);

window.addEventListener("wheel", (e: WheelEvent) => {
  elementInput.valueAsNumber += e.deltaY * 0.0005;
  onInputChange();
});

//-----------//-----------//-----------//-----------//-----------

// const anbLight = new THREE.AmbientLight(0x333333);
// scene.add(anbLight);

const pointLight = new THREE.PointLight(0xffffff, 1000000, 1000);
pointLight.position.set(0, 0, 500);
scene.add(pointLight);

//-----------//-----------//-----------//-----------//-----------

// scene.add(new THREE.GridHelper(600));
// scene.add(new THREE.AxesHelper(300));

//-----------//-----------//-----------//-----------//-----------//-----------//-----------//-----------//-----------//-----------

const textureLoader = new THREE.TextureLoader();
for (let i = 0; i < MAX_SLIDE; i++) {
  const texture = textureLoader.load(`cover-flow/${i}.jpg`);
  texture.colorSpace = THREE.SRGBColorSpace;

  const cardGroup = new THREE.Group();

  // 上面
  const material = new THREE.MeshLambertMaterial({ map: texture });
  const planeTop = new THREE.Mesh(new THREE.PlaneGeometry(ITEM_W, ITEM_H), material);
  cardGroup.add(planeTop);

  // 反射面
  const materialOpt = new THREE.MeshLambertMaterial({
    map: texture,
    transparent: true,
    opacity: 0.2,
    side: THREE.BackSide,
  });
  const planeBottom = new THREE.Mesh(new THREE.PlaneGeometry(ITEM_W, ITEM_H), materialOpt);
  planeBottom.position.y = -ITEM_H;
  planeBottom.rotation.z = Math.PI;
  planeBottom.rotation.y = Math.PI;
  cardGroup.add(planeBottom);

  cards.push(cardGroup);

  scene.add(cardGroup);
}

// 背景生成
const bgTexture = new THREE.TextureLoader().load("cover-flow/bg.png");
bgTexture.colorSpace = THREE.SRGBColorSpace;
const meshBg = new THREE.Mesh(new THREE.PlaneGeometry(3000, 1000), new THREE.MeshBasicMaterial({ map: bgTexture }));
meshBg.position.z = -500;
scene.add(meshBg);

// 初期化
moveSlide(Math.round(MAX_SLIDE / 2));

//-----------//-----------//-----------//-----------//-----------

function animate() {
  // controls.update();

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

function moveSlide(id: number) {
  if (currentPage === id) return;

  for (let i = 0; i < MAX_SLIDE; i++) {
    let targetX = MARGIN_X * (i - id);
    let targetZ = 0;
    let targetRot = 0;

    // 中央より左
    if (i < id) {
      targetX -= ITEM_W * 0.6;
      targetRot = (40 * Math.PI) / 180;
      targetZ = -ITEM_W;
    }
    // 中央より右
    else if (i > id) {
      targetX += ITEM_W * 0.6;
      targetRot = -(40 * Math.PI) / 180;
      targetZ = -ITEM_W;
    }
    // 中央
    else {
      targetX = 0;
      targetZ = 0;
      targetRot = 0;
    }

    gsap.to(cards[i].position, { x: targetX, z: targetZ, ease: "expo.out", duration: 1 });
    gsap.to(cards[i].rotation, { y: targetRot, ease: "expo.out", duration: 1 });

    currentPage = id;
  }
}

function onInputChange() {
  /** 0~1 */
  const val = elementInput.valueAsNumber;
  const nextId = Math.round(val * (MAX_SLIDE - 1));
  moveSlide(nextId);
}
