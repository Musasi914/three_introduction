import GUI from "lil-gui";
import * as THREE from "three";
import { GLTFLoader, OrbitControls, Timer } from "three/examples/jsm/Addons.js";
// import * as CANNON from "cannon-es";
// import vertexShader from "/shader/threejs-journy/galaxy/vertexShader.glsl?raw";
// import fragmentShader from "/shader/threejs-journy/galaxy/fragmentShader.glsl?raw";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [2, 2, 0];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const textureLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const timer = new Timer();
const gui = new GUI();

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

  // ToneMapping Cimonさんは下3つをよく使うらしい
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  gui.add(renderer, "toneMapping", {
    No: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACESFilmic: THREE.ACESFilmicToneMapping,
  });

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
  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.set(1024, 1024);
  directionalLight.shadow.camera.far = 15;
  directionalLight.shadow.camera.left = -7;
  directionalLight.shadow.camera.top = 7;
  directionalLight.shadow.camera.right = 7;
  directionalLight.shadow.camera.bottom = -7;
  directionalLight.shadow.normalBias = 0.05;
  directionalLight.position.set(0.25, 2, -2.25);

  return { directionalLight };
}

function createFloor() {
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({
      color: "#444444",
      metalness: 0,
      roughness: 0.5,
    })
  );
  floor.rotation.x = -Math.PI;
  floor.position.z = 3;
  floor.receiveShadow = true;

  return floor;
}

function setEnvironmentMap() {
  const enviromentMap = cubeTextureLoader
    .setPath("textures/environmentMaps/3/")
    .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);

  scene.background = enviromentMap;
  scene.environment = enviromentMap;
}

let material: THREE.MeshStandardMaterial;

const customUniforms = {
  value: 0,
};

function setGLTF() {
  const mapTexture = textureLoader.load("/textures/models/LeePerrySmith/color.jpg");
  mapTexture.colorSpace = THREE.SRGBColorSpace;
  const normalTexture = textureLoader.load("/textures/models/LeePerrySmith/normal.jpg");
  material = new THREE.MeshStandardMaterial({
    map: mapTexture,
    normalMap: normalTexture,
  });

  const depthMaterial = new THREE.MeshDepthMaterial({
    depthPacking: THREE.RGBADepthPacking,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = customUniforms;

    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
      #include <common>

      uniform float uTime;

      mat2 get2dRotateMatrix(float _angle){
        return mat2(cos(_angle),-sin(_angle),
        sin(_angle),cos(_angle));
      }
      `
    );
    shader.vertexShader = shader.vertexShader.replace(
      "	#include <beginnormal_vertex>",
      `
        #include <beginnormal_vertex>

        float angle = sin(uTime + position.y) * 0.2;
        mat2 rotateMatrix = get2dRotateMatrix(angle);

        objectNormal.xz = rotateMatrix * objectNormal.xz;
      `
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
      #include <begin_vertex>

      transformed.xz = rotateMatrix * transformed.xz;
      `
    );
  };

  depthMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = customUniforms;

    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
      #include <common>

      uniform float uTime;

      mat2 get2dRotateMatrix(float _angle){
        return mat2(cos(_angle),-sin(_angle),
        sin(_angle),cos(_angle));
      }
      `
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
      #include <begin_vertex>

      float angle = sin(uTime + position.y) * 0.2;
      mat2 rotateMatrix = get2dRotateMatrix(angle);

      transformed.xz = rotateMatrix * transformed.xz;
      `
    );
  };

  gltfLoader.load("/textures/models/LeePerrySmith/LeePerrySmith.glb", (gltf) => {
    const mesh = gltf.scene.children[0] as THREE.Mesh;
    mesh.rotation.y = (Math.PI / 180) * 90;
    mesh.material = material;
    mesh.customDepthMaterial = depthMaterial;
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add(mesh);
  });
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  setEnvironmentMap();

  const { directionalLight } = createLights();
  scene.add(directionalLight);

  const floor = createFloor();
  scene.add(floor);

  setGLTF();

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

  customUniforms.value = elapsedTime;

  renderer // Render
    .render(scene, camera);
}

init();
