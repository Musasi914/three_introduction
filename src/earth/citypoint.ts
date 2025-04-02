import * as THREE from "three";

export class CityPoint extends THREE.Group {
  sphere;
  pointLight;
  latitude = 0;
  longitude = 0;
  radius = 110;

  constructor(color: number, coords: [number, number]) {
    super();

    const geometry = new THREE.SphereGeometry(2, 10, 10);
    const material = new THREE.MeshLambertMaterial({ color });
    this.sphere = new THREE.Mesh(geometry, material);
    this.sphere.receiveShadow = true;
    this.add(this.sphere);

    this.pointLight = new THREE.PointLight(color, 1500, 0);
    this.add(this.pointLight);

    this.latitude = coords[0];
    this.longitude = coords[1];
  }

  getCoords() {
    return {
      latitude: this.latitude,
      longitude: this.longitude,
      radius: this.radius,
    };
  }
}
