import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function makeCamera(fov = 40) {
  const aspect = WIDTH / HEIGHT; // the canvas default
  const zNear = 0.1;
  const zFar = 1000;
  return new THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
}

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(40, WIDTH / HEIGHT, 0.1, 1000);
camera.position.set(0, 50, 0);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const axeshelper = new THREE.AxesHelper(10);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
(axeshelper.material as THREE.Material).depthTest = false;
axeshelper.renderOrder = 1;
scene.add(axeshelper);

{
  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(0, 20, 0);
  scene.add(light);

  const light2 = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(1, 2, 4);
  scene.add(light);
}

// 地面
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xcc8866 });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.rotation.x = -Math.PI / 2;
scene.add(groundMesh);

// タンク
const tank = new THREE.Group();
scene.add(tank);

// tankbody
const bodyGeometry = new THREE.BoxGeometry(4, 1, 8);
const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x6688aa });
const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
bodyMesh.position.y = 1.4;
tank.add(bodyMesh);

// tank camera
const tankCamera = makeCamera(75);
tankCamera.position.y = 3;
tankCamera.position.z = -6;
tankCamera.rotation.y = Math.PI;
bodyMesh.add(tankCamera);

// tank wheel
const wheelGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 6);
const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
const carWidth = 4;
const carHeight = 1;
const carLength = 8;
const wheelThickness = 0.5;
const wheelPositions: [number, number, number][] = [
  [-carWidth / 2 - wheelThickness / 2, -carHeight / 2, carLength / 3],
  [carWidth / 2 + wheelThickness / 2, -carHeight / 2, carLength / 3],
  [-carWidth / 2 - wheelThickness / 2, -carHeight / 2, 0],
  [carWidth / 2 + wheelThickness / 2, -carHeight / 2, 0],
  [-carWidth / 2 - wheelThickness / 2, -carHeight / 2, -carLength / 3],
  [carWidth / 2 + wheelThickness / 2, -carHeight / 2, -carLength / 3],
];
const wheelMeshes = wheelPositions.map((position) => {
  const mesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
  mesh.position.set(...position);
  mesh.rotation.z = Math.PI * 0.5;
  bodyMesh.add(mesh);
  return mesh;
});

// dome
const domeGeometry = new THREE.SphereGeometry(2, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.5);
const domeMesh = new THREE.Mesh(domeGeometry, bodyMaterial);
domeMesh.castShadow = true;
bodyMesh.add(domeMesh);
domeMesh.position.y = 0.5;

// turret
const turretLength = carLength * 0.75 * 0.2;
const turretGeometry = new THREE.BoxGeometry(0.1, 0.1, turretLength);
const turretMesh = new THREE.Mesh(turretGeometry, bodyMaterial);
const turretPivot = new THREE.Object3D();
turretPivot.scale.set(5, 5, 5);
turretPivot.position.y = 0.5;
turretMesh.position.z = turretLength * 0.5;
turretPivot.add(turretMesh);
bodyMesh.add(turretPivot);

// turretcamera
const turretCamera = makeCamera();
turretCamera.position.y = 0.75 * 0.2;
turretMesh.add(turretCamera);

// target
const targetGeometry = new THREE.SphereGeometry(0.5, 6, 3);
const targetMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, flatShading: true });
const targetMesh = new THREE.Mesh(targetGeometry, targetMaterial);
const targetOrbit = new THREE.Object3D();
const targetElevation = new THREE.Object3D();
const targetBob = new THREE.Object3D();
scene.add(targetOrbit);
targetOrbit.add(targetElevation);
targetElevation.position.z = carLength * 2;
targetElevation.position.y = 8;
targetElevation.add(targetBob);
targetBob.add(targetMesh);
// targetMesh < targetBob < targetElevation < targetObit < scene

// targetcamera
const targetCamera = makeCamera();
const targetCameraPivot = new THREE.Object3D();
targetCamera.position.y = 1;
targetCamera.position.z = -2;
targetCamera.rotation.y = Math.PI;
targetBob.add(targetCameraPivot);
targetCameraPivot.add(targetCamera);
// targetcamera < targetcameraPivot < targetBob

// Create a sine-like wave
const curve = new THREE.SplineCurve([
  new THREE.Vector2(-10, 0),
  new THREE.Vector2(-5, 5),
  new THREE.Vector2(0, 0),
  new THREE.Vector2(5, -5),
  new THREE.Vector2(10, 0),
  new THREE.Vector2(5, 10),
  new THREE.Vector2(-5, 10),
  new THREE.Vector2(-10, -10),
  new THREE.Vector2(-15, -8),
  new THREE.Vector2(-10, 0),
]);
const points = curve.getPoints(50);
console.log(points);
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

// Create the final object to add to the scene
const splineObject = new THREE.Line(geometry, material);
splineObject.rotation.x = Math.PI / 2;
splineObject.position.y = 0.05;
scene.add(splineObject);

const targetPosition = new THREE.Vector3();
const tankPosition = new THREE.Vector2();
const tankTarget = new THREE.Vector2();

const cameras = [
  { cam: camera, desc: "detached camera" },
  { cam: turretCamera, desc: "on turret looking at target" },
  { cam: targetCamera, desc: "near target looking at tank" },
  { cam: tankCamera, desc: "above back of tank" },
];

const infoElem = document.querySelector("#info") as HTMLElement;

const clock = new THREE.Clock();

function render() {
  const time = clock.getElapsedTime();

  // move target
  targetOrbit.rotation.y = time * 0.27;
  targetBob.position.y = Math.sin(time * 2) * 4;
  targetMesh.rotation.x = time * 7;
  targetMesh.rotation.y = time * 13;
  targetMaterial.emissive.setHSL((time * 10) % 1, 1, 0.25);
  targetMaterial.color.setHSL((time * 10) % 1, 1, 0.25);

  // move tank
  curve.getPointAt((time * 0.05) % 1, tankPosition);
  curve.getPointAt((time * 0.05 + 0.01) % 1, tankTarget);
  tank.position.set(tankPosition.x, 0, tankPosition.y);
  tank.lookAt(tankTarget.x, 0, tankTarget.y);

  // face turret
  targetMesh.getWorldPosition(targetPosition);
  turretPivot.lookAt(targetPosition);

  turretCamera.lookAt(targetPosition);

  tank.getWorldPosition(targetPosition);
  targetCameraPivot.lookAt(targetPosition);

  wheelMeshes.forEach((obj) => {
    obj.rotation.x = time * 3;
  });

  const camera = cameras[(time * 0.1) % cameras.length | 0];
  infoElem.textContent = camera.desc;

  renderer.render(scene, camera.cam);
}

renderer.setAnimationLoop(render);
