import * as THREE from "three";

export default class Aura extends THREE.Object3D {
  map;

  constructor() {
    super();

    this.map = new THREE.TextureLoader().load("/example1/aura3_type2.png");
    this.map.wrapS = this.map.wrapT = THREE.RepeatWrapping;

    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.02, 40, 40),
      new THREE.MeshBasicMaterial({ map: this.map, blending: THREE.AdditiveBlending, transparent: true })
    );

    this.add(mesh);
  }

  update() {
    this.map.offset.x = -performance.now() / 1000 / 4;
    this.map.offset.y = -performance.now() / 1000 / 4;
  }
}
