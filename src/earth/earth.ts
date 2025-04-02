import * as THREE from "three";

export class Earth extends THREE.Group {
  ground;
  cloud;

  constructor() {
    super();

    // 地球
    {
      const geometry = new THREE.SphereGeometry(100, 60, 60);
      const material = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load("/ground.jpg"),
        bumpMap: new THREE.TextureLoader().load("/bump.jpg"),
        specularMap: new THREE.TextureLoader().load("/specular.png"),
      });
      this.ground = new THREE.Mesh(geometry, material);
      this.ground.receiveShadow = true;
      this.add(this.ground);
    }

    // 雲
    {
      const geometry = new THREE.SphereGeometry(102, 60, 60);
      const material = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load("/cloud.jpg"),
        transparent: true,
        // opacity: 0.5,
        blending: THREE.AdditiveBlending,
      });
      this.cloud = new THREE.Mesh(geometry, material);
      this.cloud.castShadow = true;
      this.add(this.cloud);
    }
  }

  update() {
    this.cloud.rotation.y += 0.0005;
  }
}
