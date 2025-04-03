import * as THREE from "three";

export default class Course extends THREE.Group {
  points;

  constructor() {
    super();

    this.points = [];

    let radius = 5;

    for (let i = 0; i < 361; i++) {
      const rad = (i * Math.PI) / 180;

      let sin = Math.sin(rad * 3);

      const x = radius * Math.cos(rad) * 2 + sin * 2;
      const y = radius * Math.sin(rad) + sin * 3;

      this.points.push(new THREE.Vector3(x, y, 0));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(this.points);

    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

    const line = new THREE.Line(geometry, material);
    this.add(line);
  }
}
