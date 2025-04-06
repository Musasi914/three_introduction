import * as THREE from "three";
import Renderer from "./Renderer.js";
import Control from "./Controls.js";
import MagmaFlare from "./object/MagmaFlare.js";
import { Camera } from "./Camera.js";

export default class App {
  scene;
  camera;
  renderer;
  controls;
  magmaflare;

  constructor() {
    // シーン
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.GridHelper(20, 30));
    this.scene.add(new THREE.AxesHelper(10));

    // カメラ
    this.camera = new Camera();
    this.camera.position.set(8, 6, 0);

    // レンダラー
    this.renderer = new Renderer();

    // カメラコントロール
    this.controls = new Control(this.camera, this.renderer.domElement);

    // マグマフレア
    this.magmaflare = new MagmaFlare();
    this.scene.add(this.magmaflare);

    this.update = this.update.bind(this);
    this.update();
  }

  update() {
    this.magmaflare.update();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.renderer.setAnimationLoop(this.update);
  }
}
