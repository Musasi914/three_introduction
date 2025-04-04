import * as THREE from "three";

export default class Camera extends THREE.PerspectiveCamera {
  constructor(x: number, y: number, z: number) {
    super(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.position.set(x, y, z);
  }

  update() {
    this.lookAt(0, 0, 0);
  }
}
