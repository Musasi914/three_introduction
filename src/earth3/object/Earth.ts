import * as THREE from "three";

export default class Earth extends THREE.Group {
  earth;
  cloud;
  star;
  constructor() {
    super();

    this.earth = new THREE.Mesh(
      new THREE.SphereGeometry(100),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("/ground.jpg"),
        bumpMap: new THREE.TextureLoader().load("/bump.jpg"),
        specularMap: new THREE.TextureLoader().load("/specular.png"),
        emissiveMap: new THREE.TextureLoader().load("/night.jpg"),
      })
    );
    this.add(this.earth);

    this.cloud = new THREE.Mesh(
      new THREE.SphereGeometry(102),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("/cloud.jpg"),
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      })
    );
    this.add(this.cloud);

    this.star = new THREE.Mesh(
      new THREE.SphereGeometry(1000),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("/star.jpg") })
    );
    this.star.geometry.scale(-1, 1, 1);
    this.add(this.star);
  }

  update() {
    this.cloud.rotation.y += 0.001;
  }
}
