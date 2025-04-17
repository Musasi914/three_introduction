import * as THREE from "three";

export default class Earth extends THREE.Group {
  private earth;
  private cloud;

  constructor(manager: THREE.LoadingManager) {
    super();

    const loader = new THREE.TextureLoader(manager);

    // 地球
    const earthGeo = new THREE.SphereGeometry(100, 60, 60);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: loader.load("/earth/ground.jpg"),
      bumpMap: loader.load("/earth/bump.jpg"),
      bumpScale: 1,
      metalnessMap: loader.load("/earth/specular.png"),
      roughness: 0.5,
    });

    this.earth = new THREE.Mesh(earthGeo, earthMaterial);
    this.add(this.earth);

    // 雲
    const cloudGeo = new THREE.SphereGeometry(100.5, 60, 60);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: loader.load("/earth/cloud.jpg"),
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    this.cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
    this.add(this.cloud);
  }

  update() {
    this.earth.rotation.y += 0.0006;
    this.cloud.rotation.y += 0.0012;
  }
}
