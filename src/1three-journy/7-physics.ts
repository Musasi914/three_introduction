import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import * as CANNON from "cannon-es";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

let geometry: THREE.BufferGeometry;
let material: THREE.PointsMaterial;
let points: THREE.Points;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 1000;
const cameraPosition: [number, number, number] = [-3, 3, 3];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
const environmentMapTexture = cubeTextureLoader.load([
  "/textures/environmentMaps/0/px.png",
  "/textures/environmentMaps/0/nx.png",
  "/textures/environmentMaps/0/py.png",
  "/textures/environmentMaps/0/ny.png",
  "/textures/environmentMaps/0/pz.png",
  "/textures/environmentMaps/0/nz.png",
]);
const timer = new Timer();
const gui = new GUI();
const debugObject = {
  createSphere: () => createSphere(Math.random() * 0.5, [(Math.random() - 0.5) * 3, 3, (Math.random() - 0.5) * 3]),
  createBox: () => createBox(Math.random(), Math.random(), Math.random(), [(Math.random() - 0.5) * 3, 3, (Math.random() - 0.5) * 3]),
  reset: () => {
    for (const object of objectsToUpdate) {
      object.body.removeEventListener("collide", playHitSound);
      world.removeBody(object.body);
      scene.remove(object.mesh);
    }
    objectsToUpdate.splice(0, objectsToUpdate.length);
  },
};
gui.add(debugObject, "createSphere");
gui.add(debugObject, "createBox");
gui.add(debugObject, "reset");

let world: CANNON.World;
let defaultMaterial: CANNON.Material;
const objectsToUpdate: { mesh: THREE.Mesh; body: CANNON.Body }[] = [];

const hitSound = new Audio("/sounds/hit.mp3");
const playHitSound = (collision: any) => {
  const impactStrength = collision.contact.getImpactVelocityAlongNormal();
  if (impactStrength > 1.5) {
    hitSound.currentTime = 0;
    hitSound.volume = Math.random();
    hitSound.play();
  }
};

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
  return controls;
}

function createLights() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.set(1024, 1024);
  directionalLight.shadow.camera.far = 15;
  directionalLight.shadow.camera.left = -7;
  directionalLight.shadow.camera.top = 7;
  directionalLight.shadow.camera.right = 7;
  directionalLight.shadow.camera.bottom = -7;
  directionalLight.position.set(5, 5, 5);

  return { ambientLight, directionalLight };
}

function createFloor() {
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
      color: "#777777",
      metalness: 0.3,
      roughness: 0.4,
      envMap: environmentMapTexture,
      envMapIntensity: 0.5,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;

  return floor;
}
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 0.4,
  envMap: environmentMapTexture,
  envMapIntensity: 0.5,
});
function createSphere(radius: number, position: [number, number, number]) {
  const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  mesh.scale.setScalar(radius);
  mesh.castShadow = true;
  mesh.position.set(...position);
  scene.add(mesh);

  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(...position),
    shape: new CANNON.Sphere(radius),
    material: defaultMaterial,
  });

  world.addBody(body);

  objectsToUpdate.push({ mesh, body });
}

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 0.4,
  envMap: environmentMapTexture,
  envMapIntensity: 0.5,
});
function createBox(width: number, height: number, depth: number, position: [number, number, number]) {
  const mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.scale.set(width, height, depth);
  mesh.castShadow = true;
  mesh.position.set(...position);
  scene.add(mesh);

  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(...position),
    shape: new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2)),
    material: defaultMaterial,
  });
  body.addEventListener("collide", playHitSound);

  world.addBody(body);

  objectsToUpdate.push({ mesh, body });
}

function initPhysicsWorld() {
  world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -9.82, 0),
  });
  world.allowSleep = true;
  world.broadphase = new CANNON.SAPBroadphase(world);

  defaultMaterial = new CANNON.Material("default");

  const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
    friction: 1.1,
    restitution: 0.5,
  });

  world.addContactMaterial(defaultContactMaterial);

  const floorBody = new CANNON.Body({
    shape: new CANNON.Plane(),
    material: defaultMaterial,
  });
  floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2);
  world.addBody(floorBody);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  const { ambientLight, directionalLight } = createLights();
  scene.add(ambientLight, directionalLight);

  initPhysicsWorld();

  const floor = createFloor();
  scene.add(floor);

  createSphere(0.5, [0, 3, 0]);

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

  // Update Physics world
  for (const object of objectsToUpdate) {
    const { mesh, body } = object;

    mesh.position.copy(body.position);
    mesh.quaternion.copy(body.quaternion);
  }

  world.fixedStep();

  // Render
  renderer.render(scene, camera);
}

init();
