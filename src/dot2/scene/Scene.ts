import * as THREE from "three";
import Camera from "../camera/camera.js";
import FlashLight from "../object/frashLight.js";
import ParticleEmitter from "../object/particleEmitter.js";

export default class Scene extends THREE.Scene {
  camera: THREE.PerspectiveCamera;
  flashLight;
  particle;

  constructor() {
    super();

    // カメラ
    this.camera = new Camera(30, 5, 30);

    // 環境光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.add(ambientLight);

    // 懐中電灯
    this.flashLight = new FlashLight();
    this.add(this.flashLight);

    // パーティクル
    this.particle = new ParticleEmitter();
    this.add(this.particle);
  }

  update(startTime: number) {
    this.flashLight.update(startTime);
    this.particle.update(this.flashLight.frontVec);
  }
}
