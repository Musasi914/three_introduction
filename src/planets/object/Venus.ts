import * as THREE from "three";

export default class Venus extends THREE.Group {
  venus;
  constructor() {
    super();

    const loader = new THREE.TextureLoader();

    // 金星
    const geometry = new THREE.SphereGeometry(100, 60, 60);
    const material = new THREE.MeshStandardMaterial({
      map: loader.load("/venus/venusmap.png"),
      bumpMap: loader.load("/venus/venusbump.jpg"),
      bumpScale: 1,
      roughness: 0.5,
    });

    this.venus = new THREE.Mesh(geometry, material);
    this.add(this.venus);
  }

  update() {
    this.venus.rotation.y += 0.002;
  }
}
