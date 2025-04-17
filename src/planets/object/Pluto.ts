import * as THREE from "three";

export default class Pluto extends THREE.Group {
  private pluto;

  constructor(manager: THREE.LoadingManager) {
    super();

    const loader = new THREE.TextureLoader(manager);

    // 地球
    const plutoGeo = new THREE.SphereGeometry(100, 60, 60);
    const plutoMaterial = new THREE.MeshStandardMaterial({
      map: loader.load("/pluto/plutomap2k.jpg"),
      bumpMap: loader.load("/pluto/plutobump2k.jpg"),
      bumpScale: 1,
      roughness: 0.5,
    });

    this.pluto = new THREE.Mesh(plutoGeo, plutoMaterial);
    this.add(this.pluto);
  }

  update() {
    this.pluto.rotation.y += 0.003;
  }
}
