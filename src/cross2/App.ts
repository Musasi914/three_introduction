import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Scene from "./scene/Scene.js";
import Camera from "./camera/camera.js";
import Renderer from "./renderer/Renderer.js";

export class App {
  camera: THREE.PerspectiveCamera;
  private scene: Scene;
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
    let backvec = this.scene.frontVec.clone().negate().multiplyScalar(100);
    this.camera.position.copy(this.scene.truck.position.clone().sub(backvec));
    this.camera.lookAt(this.scene.truck.position);
    this.camera.up.set(this.scene.normal.x, this.scene.normal.y, this.scene.normal.z);

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
