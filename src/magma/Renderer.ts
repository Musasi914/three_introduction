import * as THREE from "three";

export default class Renderer extends THREE.WebGLRenderer {
  constructor() {
    super();
    this.setClearColor(0x000000, 1);
    this.setPixelRatio(window.devicePixelRatio);
    this.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.domElement);
  }
}
