import * as THREE from "three";

export default class Camera extends THREE.PerspectiveCamera {
  constructor() {
    super(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.position.set(-200, 100, -200);
    this.lookAt(0, 0, 0);
  }

  // update() {}
}
