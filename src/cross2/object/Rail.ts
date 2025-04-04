import * as THREE from "three";

const RADIUS = 20;

export default class Rail extends THREE.Group {
  points;
  constructor() {
    super();

    const material = new THREE.LineBasicMaterial({
      color: "red",
    });

    this.points = [];
    // points.push(new THREE.Vector3(-10, 0, 0));
    // points.push(new THREE.Vector3(0, 10, 0));
    // points.push(new THREE.Vector3(10, 0, 0));
    for (let i = 0; i < 362; i++) {
      const rad = (i * Math.PI) / 180;
      const x = RADIUS * Math.cos(rad);
      const y = RADIUS * Math.sin(rad);
      this.points.push(new THREE.Vector3(x, y, 0));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(this.points);

    const line = new THREE.Line(geometry, material);
    this.add(line);
  }
}
