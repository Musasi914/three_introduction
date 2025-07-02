import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import "/css/three-journy/animate.css";
import gsap from "gsap";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let cameraGroup: THREE.Group;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const parameters = {
  materialColor: "#ffeded",
};

const cameraFov = 35;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [0, 0, 6];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

let material: THREE.MeshToonMaterial;
let particlesMaterial: THREE.PointsMaterial;

const textureLoader = new THREE.TextureLoader();
const timer = new Timer();
let previoustTime = 0;
const gui = new GUI();
gui.addColor(parameters, "materialColor").onChange(() => {
  material.color.set(parameters.materialColor);
  particlesMaterial.color.set(parameters.materialColor);
});

function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(cameraFov, SIZES.width / SIZES.height, cameraNear, cameraFar);
  camera.position.set(...cameraPosition);
  cameraGroup = new THREE.Group();
  scene.add(cameraGroup);
  cameraGroup.add(camera);
  return camera;
}

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  document.body.appendChild(renderer.domElement);

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  return renderer;
}

function onWindowResize() {
  SIZES.width = window.innerWidth;
  SIZES.height = window.innerHeight;

  camera.aspect = SIZES.width / SIZES.height;
  camera.updateProjectionMatrix();

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function initLight() {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(1, 1, 0);
  return directionalLight;
}

const meshs: THREE.Mesh[] = [];
let scrollY = window.scrollY;
const cursor = {
  x: 0,
  y: 0,
};
const objectsDistance = 4;
let currentSection = 0;

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  // obj
  const textureLoader = new THREE.TextureLoader();
  const gradientTexture = textureLoader.load("/textures/gradients/3.jpg");
  gradientTexture.minFilter = THREE.NearestFilter;
  gradientTexture.magFilter = THREE.NearestFilter;
  gradientTexture.generateMipmaps = false;
  material = new THREE.MeshToonMaterial({ color: parameters.materialColor, gradientMap: gradientTexture });
  const mesh1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 16, 60), material);
  const mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material);
  const mesh3 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16), material);
  mesh1.position.y = -objectsDistance * 0;
  mesh2.position.y = -objectsDistance * 1;
  mesh3.position.y = -objectsDistance * 2;
  mesh1.position.x = 2;
  mesh2.position.x = -2;
  mesh3.position.x = 2;
  scene.add(mesh1, mesh2, mesh3);
  meshs.push(mesh1, mesh2, mesh3);

  // particles
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * meshs.length;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: true,
    size: 0.03,
  });

  const particle = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particle);

  //Light
  const directionalLight = initLight();
  scene.add(directionalLight);

  window.addEventListener("resize", onWindowResize);
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;

    const newSection = Math.round(scrollY / SIZES.height);

    if (newSection !== currentSection) {
      currentSection = newSection;

      gsap.to(meshs[currentSection].rotation, { y: "+=3", x: "+=6" });
    }
  });
  window.addEventListener("mousemove", (event: MouseEvent) => {
    cursor.x = event.clientX / SIZES.width - 0.5;
    cursor.y = event.clientY / SIZES.height - 0.5;
  });

  render();
}

function render() {
  renderer.setAnimationLoop(() => {
    tick();
  });
}

function tick() {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();
  const deltaTime = elapsedTime - previoustTime;
  previoustTime = elapsedTime;

  // Camera Update
  camera.position.y = -(scrollY / SIZES.height) * objectsDistance;

  const parallaxX = cursor.x;
  const parallaxY = -cursor.y;
  cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
  cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

  // meshs update
  for (const mesh of meshs) {
    mesh.rotation.x += deltaTime * 0.1;
    mesh.rotation.y += deltaTime * 0.12;
    // mesh.rotation.x = elapsedTime * 0.1;
    // mesh.rotation.y = elapsedTime * 0.12;
  }

  // Render
  renderer.render(scene, camera);
}

init();
