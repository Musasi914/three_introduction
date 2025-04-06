import * as THREE from "three";

export class Camera extends THREE.PerspectiveCamera {
  static instance: Camera;

  static getInstance() {
    return Camera.instance || new Camera();
  }

  constructor() {
    super(45, window.innerWidth / window.innerHeight, 1, 1000);

    Camera.instance = this;
  }
}
