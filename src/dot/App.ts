import * as THREE from "three";
import StepOneScene from "./scene/stepOneScene.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export class App {
  private scene: StepOneScene;
  private renderer: THREE.WebGLRenderer;
  startTime;

  constructor(sceneInstance: StepOneScene) {
    // シーン
    this.scene = sceneInstance;

    // レンダラー
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // リサイズ
    window.addEventListener("resize", this.resize);

    this.startTime = Date.now();

    //////////////////////////////////////////////////////
    this.scene.add(new THREE.GridHelper(600));
    this.scene.add(new THREE.AxesHelper(300));

    const controls = new OrbitControls(this.scene.camera, this.renderer.domElement);
    controls.update();
    //////////////////////////////////////////////////////

    this.update = this.update.bind(this);
    this.update();
  }

  private update() {
    this.scene.update(this.startTime);
    this.renderer.render(this.scene, this.scene.camera);
    this.renderer.setAnimationLoop(this.update);
  }

  private resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.scene.camera.aspect = width / height;
    this.scene.camera.updateProjectionMatrix();

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
  }
}
