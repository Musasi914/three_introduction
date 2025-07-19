import GUI from "lil-gui";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import * as CANNON from "cannon-es";
import vertexShader from "/shader/threejs-journy/morphing/vertexShader.glsl?raw";
import fragmentShader from "/shader/threejs-journy/morphing/fragmentShader.glsl?raw";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Timer } from "three/addons/misc/Timer.js";
import gsap from "gsap";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const cameraFov = 75;
const cameraNear = 0.1;
const cameraFar = 100;
const cameraPosition: [number, number, number] = [2, 2, 2];

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
};

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

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
  renderer.setPixelRatio(SIZES.pixelRatio);

  // ToneMapping Cimonさんは下3つをよく使うらしい
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  return renderer;
}

function onWindowResize() {
  SIZES.width = window.innerWidth;
  SIZES.height = window.innerHeight;
  SIZES.pixelRatio = Math.min(window.devicePixelRatio, 2);

  camera.aspect = SIZES.width / SIZES.height;
  camera.updateProjectionMatrix();

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(SIZES.pixelRatio);

  particlesParams.material!.uniforms.uResolution.value = new THREE.Vector2(SIZES.width * SIZES.pixelRatio, SIZES.height * SIZES.pixelRatio);
}

function setControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  return controls;
}

const particlesParams = {
  index: 0,
  morph: (index: number) => {},
  position: null as THREE.TypedArray | null,
  newPositions: [] as THREE.Float32BufferAttribute[],
  aPositionTarget: null as THREE.TypedArray | null,
  morph0: () => {
    particlesParams.morph(0);
    console.log(particlesParams.index);
  },
  morph1: () => {
    particlesParams.morph(1);
    console.log(particlesParams.index);
  },
  morph2: () => {
    particlesParams.morph(2);
    console.log(particlesParams.index);
  },
  morph3: () => {
    particlesParams.morph(3);
    console.log(particlesParams.index);
  },
  geometry: null as THREE.BufferGeometry | null,
  material: null as THREE.ShaderMaterial | null,
  particles: null as THREE.Points | null,
};

gui.add(particlesParams, "morph0");
gui.add(particlesParams, "morph1");
gui.add(particlesParams, "morph2");
gui.add(particlesParams, "morph3");

function createParticles() {
  gltfLoader.load("/textures/suzanu/models.glb", (gltf) => {
    const positions = gltf.scene.children.map((child) => {
      if (child instanceof THREE.Mesh) {
        return child.geometry.attributes.position;
      }
    });

    const maxCount = Math.max(...positions.map((position) => position.count));

    for (const position of positions) {
      const originalPosition = position.array;
      const newPosition = new Float32Array(maxCount * 3);
      for (let i = 0; i < maxCount; i++) {
        const i3 = i * 3;
        if (i3 < originalPosition.length) {
          newPosition[i3] = originalPosition[i3];
          newPosition[i3 + 1] = originalPosition[i3 + 1];
          newPosition[i3 + 2] = originalPosition[i3 + 2];
        } else {
          const randomIndex = Math.floor(Math.random() * position.count);
          newPosition[i3] = originalPosition[randomIndex * 3];
          newPosition[i3 + 1] = originalPosition[randomIndex * 3 + 1];
          newPosition[i3 + 2] = originalPosition[randomIndex * 3 + 2];
        }
      }
      particlesParams.newPositions.push(new THREE.Float32BufferAttribute(newPosition, 3));
    }
    particlesParams.position = particlesParams.newPositions[0].array;
    particlesParams.aPositionTarget = particlesParams.newPositions[1].array;

    particlesParams.geometry = new THREE.BufferGeometry();
    particlesParams.geometry.setAttribute("position", new THREE.BufferAttribute(particlesParams.position, 3));
    particlesParams.geometry.setAttribute("aPositionTarget", new THREE.BufferAttribute(particlesParams.aPositionTarget, 3));
    particlesParams.geometry.setIndex(null);

    particlesParams.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uSize: new THREE.Uniform(0.1),
        uResolution: new THREE.Uniform(new THREE.Vector2(SIZES.width * SIZES.pixelRatio, SIZES.height * SIZES.pixelRatio)),
        uProgress: new THREE.Uniform(0),
      },
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    particlesParams.particles = new THREE.Points(particlesParams.geometry, particlesParams.material);

    scene.add(particlesParams.particles);

    particlesParams.morph = (index: number) => {
      particlesParams.position = particlesParams.newPositions[particlesParams.index].array;
      particlesParams.aPositionTarget = particlesParams.newPositions[index].array;
      particlesParams.geometry!.setAttribute("position", new THREE.BufferAttribute(particlesParams.position, 3));
      particlesParams.geometry!.setAttribute("aPositionTarget", new THREE.BufferAttribute(particlesParams.aPositionTarget, 3));
      gsap.fromTo(particlesParams.material!.uniforms.uProgress, { value: 0 }, { value: 1, duration: 2, ease: "power2.inOut" });
      particlesParams.index = index;
    };
  });
}

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  createParticles();

  const controls = setControls();
  controls.update();

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
