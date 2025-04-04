import * as THREE from "three";
import StepOneScene from "./scene/Scene.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Scene from "./scene/Scene.js";
import Camera from "./camera/camera.js";
import Renderer from "./renderer/Renderer.js";

export class App {
  camera: THREE.PerspectiveCamera;
  private scene: StepOneScene;
  private renderer: Renderer;
  startTime;

  constructor() {
    // カメラ
    this.camera = new Camera();

    // シーン
    this.scene = new Scene();

    // レンダラー
    this.renderer = new Renderer();

    // リサイズ
    window.addEventListener("resize", this.resize);

    this.startTime = Date.now();

    //////////////////////////////////////////////////////

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.update();
    //////////////////////////////////////////////////////

    this.update = this.update.bind(this);
    this.update();
  }

  private update() {
    this.scene.update(this.startTime);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setAnimationLoop(this.update);
  }

  private resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
  }
}
