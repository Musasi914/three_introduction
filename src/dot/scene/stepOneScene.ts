import * as THREE from "three";
import Camera from "../camera/camera.js";
import FlashLight from "../object/frashLight.js";
import ParticleEmitter from "../object/particleEmitter.js";

export default class StepOneScene extends THREE.Scene {
  camera: THREE.PerspectiveCamera;
  /** 懐中電灯 */
  private flashLight: FlashLight;
  /** パーティクル */
  private particleEmitter;

  constructor() {
    super();

    // カメラ
    this.camera = new Camera(10, 50, 10);

    // 環境光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.add(ambientLight);

    this.flashLight = new FlashLight();
    this.add(this.flashLight);

    this.particleEmitter = new ParticleEmitter();
    this.add(this.particleEmitter);
  }

  update(startTime: number) {
    this.flashLight.update(startTime);
    this.particleEmitter.update(this.flashLight.frontVector);
  }
}
