import * as THREE from "three";

export default class BasicView {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  containerEl: HTMLElement;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.fog = new THREE.Fog(0x000000, 250, 1400);

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200000);
    this.camera.position.set(0, 50, 500);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio === 1 });
    this.renderer.setClearColor(0x000000);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.containerEl = document.createElement("div");
    this.containerEl.appendChild(this.renderer.domElement);
    document.body.appendChild(this.containerEl);

    window.addEventListener("resize", () => {
      this.handleResize();
    });
  }

  private handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  startRendering() {
    this.update();
  }
  private update() {
    this.onAnimate();
    this.renderer.render(this.scene, this.camera);
    this.renderer.setAnimationLoop(this.update.bind(this));
  }

  /** 継承先でオーバーライド前提 毎フレーム実行 */
  onAnimate() {}
}
