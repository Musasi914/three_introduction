import GUI from "lil-gui";
import * as THREE from "three";
import { DRACOLoader, GLTFLoader, GroundedSkybox, OrbitControls, RGBELoader, Timer } from "three/examples/jsm/Addons.js";
// import * as CANNON from "cannon-es";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [0, 2, 5];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const textureLoader = new THREE.TextureLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

const timer = new Timer();
const gui = new GUI();

function initCubeTextureLoader() {
  // LDR cube texture  Low Dynamic Range
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  const enviromentMap = cubeTextureLoader
    .setPath("/textures/environmentMaps/1/")
    .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

  return enviromentMap;
}

function initRGBELoader() {
  // HDR cube texture  High Dynamic Range
  const rgbeLoader = new RGBELoader();
  rgbeLoader.load("/textures/environmentMaps/blender-2k-2.hdr", (envMap) => {
    envMap.mapping = THREE.EquirectangularReflectionMapping;

    // scene.background = envMap;
    scene.environment = envMap;
  });
}

function initRGBELoaderWithSkybox() {
  const rgbeLoader = new RGBELoader();
  rgbeLoader.load("/textures/environmentMaps/2/2k.hdr", (envMap) => {
    envMap.mapping = THREE.EquirectangularReflectionMapping;

    // scene.background = envMap;
    scene.environment = envMap;

    const skybox = new GroundedSkybox(envMap, 15, 70);
    skybox.position.y = 15;
    scene.add(skybox);
  });
}

function initTextureLoader() {
  const envMap = textureLoader.load("/textures/environmentMaps/blockadesLabsSkybox/anime_art_style_japan_streets_with_cherry_blossom_.jpg");
  envMap.mapping = THREE.EquirectangularReflectionMapping;
  envMap.colorSpace = THREE.SRGBColorSpace;
  scene.background = envMap;
  scene.environment = envMap;
}

function initRealTimeEnvMap() {
  const envMap = textureLoader.load("/textures/environmentMaps/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg");
  envMap.mapping = THREE.EquirectangularReflectionMapping;
  envMap.colorSpace = THREE.SRGBColorSpace;

  scene.background = envMap;
}

function createHolyDonut() {
  const holyDonut = new THREE.Mesh(new THREE.TorusGeometry(8, 0.5), new THREE.MeshBasicMaterial({ color: new THREE.Color(10, 4, 2) }));
  return holyDonut;
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
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  document.body.appendChild(renderer.domElement);

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

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
  controls.target.set(0, 0.75, 0);
  return controls;
}

function createLights() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.set(1024, 1024);
  directionalLight.shadow.camera.far = 15;
  directionalLight.shadow.camera.left = -7;
  directionalLight.shadow.camera.top = 7;
  directionalLight.shadow.camera.right = 7;
  directionalLight.shadow.camera.bottom = -7;
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  return { ambientLight, directionalLight };
}

function createFloor() {
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
      color: "#444444",
      metalness: 0,
      roughness: 0.5,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;

  return floor;
}

function createTorusKnot() {
  const mesh = new THREE.Mesh(
    new THREE.TorusKnotGeometry(),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 1,
      color: 0xaaaaaa,
    })
  );

  return mesh;
}

let holyDonut: THREE.Mesh;
let cubeCamera: THREE.CubeCamera;

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  // const { ambientLight, directionalLight } = createLights();
  // scene.add(ambientLight, directionalLight);

  // const floor = createFloor();
  // scene.add(floor);

  gltfLoader.load("/textures/models/FlightHelmet/glTF/FlightHelmet.gltf", (data) => {
    data.scene.scale.setScalar(10);
    scene.add(data.scene);
  });

  // const envmap = initCubeTextureLoader();
  // scene.background = envmap;
  // scene.environment = envmap;
  // scene.environmentIntensity = 4;
  // scene.backgroundBlurriness = 0.1;
  // scene.backgroundIntensity = 5;

  // gui.add(scene, "environmentIntensity", 0, 10, 1);
  // gui.add(scene, "backgroundBlurriness", 0, 1, 0.001);
  // gui.add(scene, "backgroundIntensity", 0, 10, 1);

  // initRGBELoader();

  // initTextureLoader();

  // initRGBELoaderWithSkybox();

  initRealTimeEnvMap();

  holyDonut = createHolyDonut();
  holyDonut.position.y = 3.5;
  holyDonut.layers.enable(1);
  scene.add(holyDonut);

  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
    type: THREE.HalfFloatType,
  });
  cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
  cubeCamera.layers.set(1);
  scene.environment = cubeRenderTarget.texture;

  const torus = createTorusKnot();
  torus.position.x = -4;
  torus.position.y = 4;
  // torus.material.envMap = envmap;
  scene.add(torus);

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

  // envmp realtime
  if (holyDonut) {
    holyDonut.rotation.x = Math.sin(elapsedTime) * 2;
    cubeCamera.update(renderer, scene);
  }

  // Render
  renderer.render(scene, camera);
}

init();

// Step1 背景にenvMapを適用

// Step2 Primitiveの反射にenvMapを適用

// Step3 ライティングとしてenvMapを適用  Primitiveに直接適用しなくても全オブジェクトに適用できる

// Step4 envMapのライティングの強さを変えたり、ぼかしをつけたり

// Step5 HDRファイルを読む。 RGBELoader

// Step6 シーンに追加したオブジェクトが宙に浮いているのが違和感に感じたら、skyboxを利用して地面につけよう。

// Step7 webglcuberendertargetで、オブジェクト同士の反射

// Step8 オブジェクトが自分自身を反射してしまうというバグに対処するために、layerという概念を掴もう
