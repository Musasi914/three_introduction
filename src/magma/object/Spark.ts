import * as THREE from "three";

export class Spark extends THREE.Object3D {
  mesh;
  speed = Math.random() * 0.2 + 0.1;
  opacity = 0.5;

  constructor() {
    super();

    const map = new THREE.TextureLoader().load("/example1/Burst01.png");
    map.wrapS = map.wrapT = THREE.RepeatWrapping;

    const material = new THREE.MeshBasicMaterial({
      map,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: this.opacity,
    });

    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 2), material);
    this.mesh.position.y = Math.random() * 5;
    this.mesh.rotation.y = Math.random() * 2;
    this.add(this.mesh);
  }

  time = 0;

  update() {
    const time = performance.now() - this.time;
    const speedRatio = time / 16;

    this.mesh.material.opacity -= speedRatio * 0.01;
    this.mesh.position.y -= this.speed * speedRatio;

    if (this.mesh.position.y < 0 || this.mesh.material.opacity < 0) {
      this.mesh.position.y = 8;
      this.mesh.material.opacity = this.opacity;
    }

    this.time = performance.now();
  }
}
