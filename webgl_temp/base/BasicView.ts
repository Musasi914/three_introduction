import * as THREE from "three";

export default class BasicView {
  canvasWidth: number = window.innerWidth;
  canvasHeight: number = window.innerHeight;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  containerEl: HTMLElement;

  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, this.canvasWidth / this.canvasHeight, 1, 200000);
    this.camera.position.set(300, 50, 300);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio === 1 });
    this.renderer.setClearColor(0x000000);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    this.containerEl = document.createElement("div");
    this.containerEl.appendChild(this.renderer.domElement);
    document.body.appendChild(this.containerEl);

    window.addEventListener("resize", () => {
      this.handleResize();
    });
  }

  private handleResize() {
    this.camera.aspect = this.canvasWidth / this.canvasHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.canvasWidth, this.canvasHeight);
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
