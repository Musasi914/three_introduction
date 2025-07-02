import GUI from "lil-gui";
import * as THREE from "three";
import { GLTF, GLTFLoader, OrbitControls, Timer } from "three/examples/jsm/Addons.js";
// import * as CANNON from "cannon-es";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [0, 2, 2];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const textureLoader = new THREE.TextureLoader();

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

let object1: THREE.Mesh;
let object2: THREE.Mesh;
let object3: THREE.Mesh;

function createSpheres() {
  object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
    })
  );
  object1.position.x = -2;
  object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
    })
  );
  object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
    })
  );
  object3.position.x = 2;

  return { object1, object2, object3 };
}

let raycaster: THREE.Raycaster;
const mouse = new THREE.Vector2();

function onMouseMove(event: MouseEvent) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
let gltfModel: GLTF | null;
function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  const { ambientLight, directionalLight } = createLights();
  scene.add(ambientLight, directionalLight);

  const { object1, object2, object3 } = createSpheres();
  scene.add(object1, object2, object3);
  raycaster = new THREE.Raycaster();

  const gltfLoader = new GLTFLoader();
  gltfLoader.load("/textures/models/Duck/glTF-Binary/Duck.glb", (gltf) => {
    scene.add(gltf.scene);
    gltfModel = gltf;
  });

  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("click", () => {
    if (currentIntersect) {
      console.log("click on sphere");
      if (currentIntersect === object1) {
        console.log("click 1");
      }
    }
  });

  render();
}

function render() {
  renderer.setAnimationLoop(() => {
    tick();
  });
}

let currentIntersect: THREE.Mesh | null = null;

function tick() {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();

  // Update Controls
  controls.update();

  // Update Objects
  object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5;
  object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5;
  object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5;

  // Raycaster
  raycaster.setFromCamera(mouse, camera);
  // const rayOrigin = new THREE.Vector3(-3, 0, 0);
  // const rayDirection = new THREE.Vector3(1, 0, 0);
  // rayDirection.normalize();
  // raycaster.set(rayOrigin, rayDirection);

  const testObjects = [object1, object2, object3];
  const intersects = raycaster.intersectObjects(testObjects);

  for (const object of testObjects) {
    (object.material as THREE.MeshBasicMaterial).color.set(0xff0000);
  }
  for (const intersect of intersects) {
    ((intersect.object as THREE.Mesh).material as THREE.MeshBasicMaterial).color.set(0x00ff00);
  }

  if (intersects.length) {
    if (currentIntersect === null) {
      console.log("mouseEnter");
    }
    currentIntersect = intersects[0].object as THREE.Mesh;
  } else {
    if (currentIntersect !== null) {
      console.log("mouseleave");
    }
    currentIntersect = null;
  }

  if (gltfModel) {
    /**
     * intersectObjectでも配列が変える理由
     * １，intersecobjectに渡されたオブジェクトの子要素のそのまた子要素。。。を見るから
     * 2, 一つのオブジェクトで２回検知する場合もあるから（輪っかとか「）その場合、２子リターンする
     */
    const modelIntersects = raycaster.intersectObject(gltfModel.scene);
  }
  // Render
  renderer.render(scene, camera);
}

init();
