import gsap from "gsap/all";
import GUI from "lil-gui";
import * as THREE from "three";
import { FontLoader, OrbitControls, TextGeometry } from "three/examples/jsm/Addons.js";

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("/textures/matcaps/8.png");

/**
 * Fonts
 */
const fontLoader = new FontLoader();
fontLoader.load("/font/helvetiker_regular.typeface.json", (font) => {
  const textGeometry = new TextGeometry("Hello Three.js", {
    font,
    size: 0.5,
    depth: 0.2,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  textGeometry.center();
  // textGeometry.computeBoundingBox();
  // if (!textGeometry.boundingBox) return;
  // textGeometry.translate(
  //   -textGeometry.boundingBox.max.x * 0.5,
  //   -textGeometry.boundingBox.max.y * 0.5,
  //   -textGeometry.boundingBox.max.z * 0.5
  // );
  const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
  const text = new THREE.Mesh(textGeometry, material);
  scene.add(text);

  console.time("donuts");
  const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
  for (let i = 0; i < 1000; i++) {
    const donut = new THREE.Mesh(donutGeometry, material);

    donut.position.x = (Math.random() - 0.5) * 10;
    donut.position.y = (Math.random() - 0.5) * 10;
    donut.position.z = (Math.random() - 0.5) * 10;

    donut.rotation.x = Math.random() * Math.PI;
    donut.rotation.y = Math.random() * Math.PI;

    donut.scale.setScalar(Math.random());

    scene.add(donut);
  }
  console.timeEnd("donuts");
});

/**
 * GUI
 */
const gui = new GUI();

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
scene.add(group);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const ambientLight = new THREE.AmbientLight(0xdddddd, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 100);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

// Camera
const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, SIZES.width / SIZES.height);
camera.position.set(0, 0, 3);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(SIZES.width, SIZES.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// controls.enabled = false;

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(tick);

window.addEventListener("resize", () => {
  SIZES.width = window.innerWidth;
  SIZES.height = window.innerHeight;
  camera.aspect = SIZES.width / SIZES.height;
  camera.updateProjectionMatrix();
  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
