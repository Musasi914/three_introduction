import * as THREE from "three";

export default class Magma extends THREE.Object3D {
  map;
  constructor() {
    super();
    this.map = new THREE.TextureLoader().load("/example1/magma.png");

    const mesh = new THREE.Mesh(new THREE.SphereGeometry(2, 40, 40), new THREE.MeshBasicMaterial({ map: this.map }));
    this.add(mesh);

    this.map.wrapS = this.map.wrapT = THREE.RepeatWrapping;
  }

  update() {
    this.map.offset.x = performance.now() / 1000 / 2;
    this.map.offset.y = performance.now() / 1000 / 2.5;
  }
}
