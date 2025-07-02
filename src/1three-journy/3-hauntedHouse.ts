import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls, Sky, Timer } from "three/examples/jsm/Addons.js";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 200;
const cameraPosition: [number, number, number] = [4, 2, 5];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const houseMeasurements = {
  width: 4,
  height: 2.5,
  depth: 4,
  roofHeight: 1.5,
  graveHeight: 0.8,
};

const gui = new GUI();
const textureLoader = new THREE.TextureLoader();
const timer = new Timer();

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
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0x86cdff, 0.275);

  // Directional light
  const directionalLight = new THREE.DirectionalLight(0x86cdff, 1);
  directionalLight.position.set(3, 2, -8);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 256;
  directionalLight.shadow.mapSize.height = 256;
  directionalLight.shadow.camera.top = 8;
  directionalLight.shadow.camera.bottom = -8;
  directionalLight.shadow.camera.right = 8;
  directionalLight.shadow.camera.left = -8;
  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 20;

  // Door light
  const doorLight = new THREE.PointLight(0xff7d46, 5);
  doorLight.position.set(0, houseMeasurements.height - 0.3, houseMeasurements.width / 2 + 0.3);

  return { ambientLight, directionalLight, doorLight };
}

function createFloor() {
  const floorAlphaTexture = textureLoader.load("/textures/hauntedHouse/floor/alpha.jpg");
  const floorColorTexture = textureLoader.load("/textures/hauntedHouse/floor/rocky_terrain_diff_1k.jpg");
  const floorARMTexture = textureLoader.load("/textures/hauntedHouse/floor/rocky_terrain_arm_1k.jpg");
  const floorDisplaceTexture = textureLoader.load("/textures/hauntedHouse/floor/rocky_terrain_disp_1k.jpg");
  const floorNormalTexture = textureLoader.load("/textures/hauntedHouse/floor/rocky_terrain_nor_gl_1k.jpg");

  floorColorTexture.repeat.set(8, 8);
  floorARMTexture.repeat.set(8, 8);
  floorDisplaceTexture.repeat.set(8, 8);
  floorNormalTexture.repeat.set(8, 8);

  floorColorTexture.wrapS = THREE.RepeatWrapping;
  floorColorTexture.wrapT = THREE.RepeatWrapping;
  floorARMTexture.wrapS = THREE.RepeatWrapping;
  floorARMTexture.wrapT = THREE.RepeatWrapping;
  floorDisplaceTexture.wrapS = THREE.RepeatWrapping;
  floorDisplaceTexture.wrapT = THREE.RepeatWrapping;
  floorNormalTexture.wrapS = THREE.RepeatWrapping;
  floorNormalTexture.wrapT = THREE.RepeatWrapping;

  floorColorTexture.colorSpace = THREE.SRGBColorSpace;

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20, 100, 100),
    new THREE.MeshStandardMaterial({
      transparent: true,
      alphaMap: floorAlphaTexture,
      map: floorColorTexture,
      aoMap: floorARMTexture,
      roughnessMap: floorARMTexture,
      metalnessMap: floorARMTexture,
      normalMap: floorNormalTexture,
      displacementMap: floorDisplaceTexture,
      displacementScale: 0.2,
      displacementBias: -0.07,
    })
  );
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI / 2;

  gui.add(floor.material, "displacementScale", 0, 1, 0.001).name("floorDisplacementScale");
  gui.add(floor.material, "displacementBias", -1, 1, 0.001).name("floorDisplacementBias");

  return floor;
}

function createHouse() {
  // House Container
  const house = new THREE.Group();

  // Walls
  const wallColorTexture = textureLoader.load("/textures/hauntedHouse/wall/castle_brick_broken_06_diff_1k.jpg");
  const wallARMTexture = textureLoader.load("/textures/hauntedHouse/wall/castle_brick_broken_06_arm_1k.jpg");
  const wallNormalTexture = textureLoader.load("/textures/hauntedHouse/wall/castle_brick_broken_06_nor_gl_1k.jpg");

  wallColorTexture.colorSpace = THREE.SRGBColorSpace;
  wallColorTexture.minFilter = THREE.NearestFilter;

  const walls = new THREE.Mesh(
    new THREE.BoxGeometry(houseMeasurements.width, houseMeasurements.height, houseMeasurements.depth),
    new THREE.MeshStandardMaterial({
      map: wallColorTexture,
      aoMap: wallARMTexture,
      roughnessMap: wallARMTexture,
      metalnessMap: wallARMTexture,
      normalMap: wallNormalTexture,
    })
  );
  walls.castShadow = true;
  walls.receiveShadow = true;
  walls.position.y = houseMeasurements.height / 2;
  house.add(walls);

  // Roof
  const roofColorTexture = textureLoader.load("/textures/hauntedHouse/roof/roof_slates_02_diff_1k.jpg");
  const roofARMTexture = textureLoader.load("/textures/hauntedHouse/roof/roof_slates_02_arm_1k.jpg");
  const roofNormalTexture = textureLoader.load("/textures/hauntedHouse/roof/roof_slates_02_nor_gl_1k.jpg");

  roofColorTexture.colorSpace = THREE.SRGBColorSpace;

  roofColorTexture.repeat.set(3, 1);
  roofARMTexture.repeat.set(3, 1);
  roofNormalTexture.repeat.set(3, 1);

  roofColorTexture.wrapS = THREE.RepeatWrapping;
  roofARMTexture.wrapS = THREE.RepeatWrapping;
  roofNormalTexture.wrapS = THREE.RepeatWrapping;

  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, houseMeasurements.roofHeight, 4),
    new THREE.MeshStandardMaterial({
      map: roofColorTexture,
      aoMap: roofARMTexture,
      roughnessMap: roofARMTexture,
      metalnessMap: roofARMTexture,
      normalMap: roofNormalTexture,
    })
  );
  roof.castShadow = true;
  roof.position.y = houseMeasurements.height + houseMeasurements.roofHeight / 2;
  roof.rotation.y = (Math.PI / 180) * 45;
  house.add(roof);

  // Door
  const doorAlphaTexture = textureLoader.load("/textures/hauntedHouse/door/alpha.jpg");
  const doorAOTexture = textureLoader.load("/textures/hauntedHouse/door/ambientOcclusion.jpg");
  const doorColorTexture = textureLoader.load("/textures/hauntedHouse/door/color.jpg");
  const doorHeightTexture = textureLoader.load("/textures/hauntedHouse/door/height.jpg");
  const doorMetalnessTexture = textureLoader.load("/textures/hauntedHouse/door/metalness.jpg");
  const doorNormalTexture = textureLoader.load("/textures/hauntedHouse/door/normal.jpg");
  const doorRoughnessTexture = textureLoader.load("/textures/hauntedHouse/door/roughness.jpg");

  doorColorTexture.colorSpace = THREE.SRGBColorSpace;

  const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
    new THREE.MeshStandardMaterial({
      map: doorColorTexture,
      alphaMap: doorAlphaTexture,
      transparent: true,
      aoMap: doorAOTexture,
      displacementMap: doorHeightTexture,
      displacementScale: 0.15,
      displacementBias: -0.04,
      metalnessMap: doorMetalnessTexture,
      normalMap: doorNormalTexture,
      roughnessMap: doorRoughnessTexture,
    })
  );
  door.position.y = 1;
  door.position.z = houseMeasurements.width / 2 + 0.01;
  house.add(door);

  // Bushes
  const bushColorTexture = textureLoader.load("/textures/hauntedHouse/bush/leaves_forest_ground_diff_1k.jpg");
  const bushARMTexture = textureLoader.load("/textures/hauntedHouse/bush/leaves_forest_ground_arm_1k.jpg");
  const bushNormalTexture = textureLoader.load("/textures/hauntedHouse/bush/leaves_forest_ground_nor_gl_1k.jpg");

  bushColorTexture.colorSpace = THREE.SRGBColorSpace;

  bushColorTexture.repeat.set(2, 1);
  bushARMTexture.repeat.set(2, 1);
  bushNormalTexture.repeat.set(2, 1);

  bushColorTexture.wrapS = THREE.RepeatWrapping;
  bushARMTexture.wrapS = THREE.RepeatWrapping;
  bushNormalTexture.wrapS = THREE.RepeatWrapping;

  const bushGeometry = new THREE.SphereGeometry(1);
  const bushMaterial = new THREE.MeshStandardMaterial({
    color: "#ccffcc",
    map: bushColorTexture,
    aoMap: bushARMTexture,
    roughnessMap: bushARMTexture,
    metalnessMap: bushARMTexture,
    normalMap: bushNormalTexture,
  });

  const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
  bush1.scale.setScalar(0.5);
  bush1.position.set(0.8, 0.2, 2.2);
  bush1.rotation.x = -0.75;

  const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
  bush2.scale.setScalar(0.25);
  bush2.position.set(1.4, 0.1, 2.1);
  bush2.rotation.x = -0.75;

  const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
  bush3.scale.setScalar(0.4);
  bush3.position.set(-0.8, 0.1, 2.2);
  bush3.rotation.x = -0.75;

  const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
  bush4.scale.setScalar(0.15);
  bush4.position.set(-1, 0.05, 2.6);
  bush4.rotation.x = -0.75;

  house.add(bush1, bush2, bush3, bush4);

  return house;
}

function createGraves() {
  const graveColorTexture = textureLoader.load("/textures/hauntedHouse/grave/plastered_stone_wall_diff_1k.jpg");
  const graveARMTexture = textureLoader.load("/textures/hauntedHouse/grave/plastered_stone_wall_arm_1k.jpg");
  const graveNormalTexture = textureLoader.load("/textures/hauntedHouse/grave/plastered_stone_wall_nor_gl_1k.jpg");

  graveColorTexture.colorSpace = THREE.SRGBColorSpace;
  graveColorTexture.minFilter = THREE.NearestFilter;

  const graveGeometry = new THREE.BoxGeometry(0.6, houseMeasurements.graveHeight, 0.2);
  const graveMaterial = new THREE.MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveARMTexture,
    roughnessMap: graveARMTexture,
    metalnessMap: graveARMTexture,
    normalMap: graveNormalTexture,
  });

  const graves = new THREE.Group();

  for (let i = 0; i < 30; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 4 + 3;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    const grave = new THREE.Mesh(graveGeometry, graveMaterial);
    grave.castShadow = true;
    grave.receiveShadow = true;
    grave.position.x = x;
    grave.position.y = (Math.random() * houseMeasurements.graveHeight) / 2;
    grave.position.z = z;
    grave.rotation.set((Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4);
    graves.add(grave);
  }

  return graves;
}

function createGhosts() {
  const ghost1 = new THREE.PointLight(0x8800ff, 6);
  const ghost2 = new THREE.PointLight(0xff0088, 6);
  const ghost3 = new THREE.PointLight(0xff0000, 6);

  ghost1.castShadow = true;
  ghost1.shadow.mapSize.width = 64;
  ghost1.shadow.mapSize.height = 64;
  ghost1.shadow.camera.far = 8;
  ghost2.castShadow = true;
  ghost2.shadow.mapSize.width = 64;
  ghost2.shadow.mapSize.height = 64;
  ghost2.shadow.camera.far = 8;
  ghost3.castShadow = true;
  ghost3.shadow.mapSize.width = 64;
  ghost3.shadow.mapSize.height = 64;
  ghost3.shadow.camera.far = 8;

  const ghosts = { ghost1, ghost2, ghost3 };

  return ghosts;
}

function createSky() {
  const sky = new Sky();
  sky.scale.setScalar(100);
  sky.material.uniforms["turbidity"].value = 10;
  sky.material.uniforms["rayleigh"].value = 3;
  sky.material.uniforms["mieCoefficient"].value = 0.1;
  sky.material.uniforms["mieDirectionalG"].value = 0.95;
  sky.material.uniforms["sunPosition"].value.set(0.3, -0.038, -0.95);

  return sky;
}

function createFog() {
  // scene.fog = new THREE.Fog(0xff0000, 1, 13);
  scene.fog = new THREE.FogExp2(0x02343f, 0.1);
}

function tick(ghosts: { ghost1: THREE.PointLight; ghost2: THREE.PointLight; ghost3: THREE.PointLight }) {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();

  // Ghost
  const { ghost1, ghost2, ghost3 } = ghosts;
  const ghost1Angle = elapsedTime * 0.5;
  ghost1.position.x = Math.cos(ghost1Angle) * 4;
  ghost1.position.z = Math.sin(ghost1Angle) * 4;
  ghost1.position.y = Math.sin(ghost1Angle) * Math.sin(ghost1Angle * 2.34) * Math.sin(ghost1Angle * 3.45) + 0.7;

  const ghost2Angle = -elapsedTime * 0.38;
  ghost2.position.x = Math.cos(ghost2Angle) * 5;
  ghost2.position.z = Math.sin(ghost2Angle) * 5;
  ghost2.position.y = Math.sin(ghost2Angle) * Math.sin(ghost2Angle * 2.34) * Math.sin(ghost2Angle * 3.45) + 0.7;

  const ghost3Angle = elapsedTime * 0.23;
  ghost3.position.x = Math.cos(ghost3Angle) * 4;
  ghost3.position.z = Math.sin(ghost3Angle) * 4;
  ghost3.position.y = Math.sin(ghost3Angle) * Math.sin(ghost3Angle * 2.34) * Math.sin(ghost3Angle * 3.45) + 0.7;

  // Update Controls
  controls.update();

  // Render
  renderer.render(scene, camera);
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const controls = setControls();
  controls.update();

  const { ambientLight, directionalLight, doorLight } = createLights();
  scene.add(ambientLight, directionalLight, doorLight);

  const floor = createFloor();
  scene.add(floor);
  console.log(floor.material);

  const house = createHouse();
  scene.add(house);

  const graves = createGraves();
  scene.add(graves);

  const ghosts = createGhosts();
  scene.add(ghosts.ghost1, ghosts.ghost2, ghosts.ghost3);

  const sky = createSky();
  scene.add(sky);

  createFog();

  window.addEventListener("resize", onWindowResize);

  render(ghosts);
}

function render(ghosts: { ghost1: THREE.PointLight; ghost2: THREE.PointLight; ghost3: THREE.PointLight }) {
  renderer.setAnimationLoop(() => {
    tick(ghosts);
  });
}

init();
