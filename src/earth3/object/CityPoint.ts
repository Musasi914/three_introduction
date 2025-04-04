import * as THREE from "three";

const RADIUS = 104;

export default class CityPoint extends THREE.Group {
  latitude;
  longitude;
  geometry;
  material;
  sphere;
  light;
  constructor(color: THREE.ColorRepresentation, latitude: number, longitude: number) {
    super();
    this.latitude = latitude;
    this.longitude = longitude;
    this.geometry = new THREE.SphereGeometry(2);
    this.material = new THREE.MeshLambertMaterial({ color });
    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.add(this.sphere);

    this.light = new THREE.PointLight(color, 100);
    this.add(this.light);

    const phi = (latitude * Math.PI) / 180;
    const theta = ((longitude - 180) * Math.PI) / 180;
    const x = -RADIUS * Math.cos(phi) * Math.cos(theta);
    const y = RADIUS * Math.sin(phi);
    const z = RADIUS * Math.cos(phi) * Math.sin(theta);
    this.position.set(x, y, z);
  }

  equatorUpdate() {
    this.longitude += 1;
    const phi = (this.latitude * Math.PI) / 180;
    const theta = ((this.longitude - 180) * Math.PI) / 180;
    const x = -RADIUS * Math.cos(phi) * Math.cos(theta);
    const y = RADIUS * Math.sin(phi);
    const z = RADIUS * Math.cos(phi) * Math.sin(theta);
    this.position.set(x, y, z);
  }
}
