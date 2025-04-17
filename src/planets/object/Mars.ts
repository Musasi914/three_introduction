import * as THREE from "three";

export default class Mars extends THREE.Group {
  mars;
  constructor(manager: THREE.LoadingManager) {
    super();

    const loader = new THREE.TextureLoader(manager);

    // 火星
    const geometry = new THREE.SphereGeometry(100, 60, 60);
    const material = new THREE.MeshStandardMaterial({
      map: loader.load("/mars/mars.png"),
      normalMap: loader.load("/mars/mars_1k_normal.jpg"),
      bumpMap: loader.load("/mars/marsbump1k.jpg"),
      bumpScale: 1,
      metalnessMap: loader.load("/earth/specular.png"),
      roughness: 0.5,
    });

    this.mars = new THREE.Mesh(geometry, material);
    this.add(this.mars);
  }

  update() {
    this.mars.rotation.y += 0.001;
  }
}
