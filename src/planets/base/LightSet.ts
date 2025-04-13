import * as THREE from "three";

export default class LightSet extends THREE.Group {
  constructor() {
    super();

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(1, 1, 1);
    this.add(dirLight);

    // const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
    // this.add(ambLight);
  }
}
