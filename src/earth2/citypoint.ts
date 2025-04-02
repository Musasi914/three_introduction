import * as THREE from "three";

export class CityPoint extends THREE.Group {
  latitude = 0;
  longitude = 0;
  radius = 104;
  geometry;
  material;
  mesh;
  light;
  x;
  y;
  z;
  phi;
  theta;

  constructor(color: THREE.ColorRepresentation, latitude: number, longitude: number) {
    super();
    this.latitude = latitude;
    this.longitude = longitude;

    this.geometry = new THREE.SphereGeometry(2);
    this.material = new THREE.MeshBasicMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.add(this.mesh);

    this.light = new THREE.PointLight(color, 50);
    this.add(this.light);

    this.phi = (this.latitude * Math.PI) / 180;
    this.theta = ((this.longitude - 180) * Math.PI) / 180;
    this.x = -this.radius * Math.cos(this.phi) * Math.cos(this.theta);
    this.y = this.radius * Math.sin(this.phi);
    this.z = this.radius * Math.cos(this.phi) * Math.sin(this.theta);

    this.position.set(this.x, this.y, this.z);
  }

  moveOnEquator() {
    this.phi = (this.latitude * Math.PI) / 180;
    this.theta = ((this.longitude - 180) * Math.PI) / 180;
    this.x = -this.radius * Math.cos(this.phi) * Math.cos(this.theta);
    this.y = this.radius * Math.sin(this.phi);
    this.z = this.radius * Math.cos(this.phi) * Math.sin(this.theta);

    this.position.set(this.x, this.y, this.z);
    this.longitude += 0.3;
  }
}
