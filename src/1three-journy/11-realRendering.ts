import GUI from "lil-gui";
import * as THREE from "three";
import { DRACOLoader, GLTFLoader, OrbitControls, RGBELoader, Timer } from "three/examples/jsm/Addons.js";
// import * as CANNON from "cannon-es";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [4, 5, 4];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const textureLoader = new THREE.TextureLoader();
const rgbeLoader = new RGBELoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

const timer = new Timer();
const gui = new GUI();

// const updateAllMaterials = () => {
//   scene.traverse((child) => {
//     console.log(child);
//     // if (child.isMesh) {
//     //   // Activate shadow here
//     //   console.log("s");
//     // }
//   });
// };

// function loadTextures() {
//   textureLoader.load('')
// }

function initRGBELoader() {
  rgbeLoader.load("/textures/environmentMaps/0/2k.hdr", (enviromentMap) => {
    enviromentMap.mapping = THREE.EquirectangularReflectionMapping;

    scene.background = enviromentMap;
    scene.environment = enviromentMap;
    scene.environmentIntensity = 1;
    gui.add(scene, "environmentIntensity", 1, 10, 1);
  });
}

function initGLTFLoader() {
  gltfLoader.load("/textures/models/Humbarger/humbarger.glb", (gltf) => {
    gltf.scene.scale.setScalar(0.4);
    gltf.scene.position.set(0, 2.5, 0);
    scene.add(gltf.scene);
    scene.traverse((child: any) => {
      if (child.isMesh && child.material.isMeshStandardMaterial) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  });
}

function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(cameraFov, SIZES.width / SIZES.height, cameraNear, cameraFar);
  camera.position.set(...cameraPosition);
  scene.add(camera);
  return camera;
}

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio === 1 });

  document.body.appendChild(renderer.domElement);

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // ToneMapping
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 3;

  gui.add(renderer, "toneMapping", {
    No: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACESFilmic: THREE.ACESFilmicToneMapping,
  });
  gui.add(renderer, "toneMappingExposure", 0, 10, 0.001);

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

function setControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.set(0, 3.5, 0);
  return controls;
}

function createLights() {
  // const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
  // scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 6);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.set(1024, 1024);
  directionalLight.shadow.camera.far = 15;
  // directionalLight.shadow.camera.left = -7;
  // directionalLight.shadow.camera.top = 7;
  // directionalLight.shadow.camera.right = 7;
  // directionalLight.shadow.camera.bottom = -7;
  directionalLight.position.set(-4, 6.5, 2.5);
  directionalLight.target.position.set(0, 4, 0);
  directionalLight.target.updateWorldMatrix(false, false);
  directionalLight.shadow.bias = -0.004;
  directionalLight.shadow.normalBias = 0.027;
  // scene.add(directionalLight);

  // const directionalLightHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
  // scene.add(directionalLightHelper);

  gui.add(directionalLight, "intensity", 0, 10, 0.001).name("lightintensity");
  gui.add(directionalLight.position, "x", -10, 10, 0.001).name("lightX");
  gui.add(directionalLight.position, "y", -10, 10, 0.001).name("lightY");
  gui.add(directionalLight.position, "z", -10, 10, 0.001).name("lightZ");

  gui.add(directionalLight, "castShadow");

  gui.add(directionalLight.shadow, "bias", -0.05, 0.05, 0.001);
  gui.add(directionalLight.shadow, "normalBias", -0.05, 0.05, 0.001);

  return { directionalLight };
}

function createFloor() {
  const floorNormalTexture = textureLoader.load("/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_nor_gl_1k.png");
  const floorDiffuseTexture = textureLoader.load("/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_diff_1k.jpg");
  const floorARMTexture = textureLoader.load("/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_arm_1k.jpg");
  floorDiffuseTexture.colorSpace = THREE.SRGBColorSpace;

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 8),
    new THREE.MeshStandardMaterial({
      map: floorDiffuseTexture,
      normalMap: floorNormalTexture,
      aoMap: floorARMTexture,
      roughnessMap: floorARMTexture,
      metalnessMap: floorARMTexture,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;

  return floor;
}
function createWall() {
  const wallNormalTexture = textureLoader.load("/textures/castle_brick_broken_06/castle_brick_broken_06_nor_gl_1k.png");
  const wallDiffuseTexture = textureLoader.load("/textures/castle_brick_broken_06/castle_brick_broken_06_diff_1k.jpg");
  const wallARMTexture = textureLoader.load("/textures/castle_brick_broken_06/castle_brick_broken_06_arm_1k.jpg");
  wallDiffuseTexture.colorSpace = THREE.SRGBColorSpace;
  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 8),
    new THREE.MeshStandardMaterial({
      map: wallDiffuseTexture,
      normalMap: wallNormalTexture,
      aoMap: wallARMTexture,
      roughnessMap: wallARMTexture,
      metalnessMap: wallARMTexture,
    })
  );
  wall.position.z = -4;
  wall.position.y = 4;
  wall.receiveShadow = true;

  return wall;
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  const { directionalLight } = createLights();
  scene.add(directionalLight);

  initRGBELoader();
  initGLTFLoader();

  const floor = createFloor();
  scene.add(floor);

  const wall = createWall();
  scene.add(wall);

  window.addEventListener("resize", onWindowResize);

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

  // Update Controls
  controls.update();

  // Render
  renderer.render(scene, camera);
}

init();

//Step1 toneMapping HDRをLDRに変換　値
