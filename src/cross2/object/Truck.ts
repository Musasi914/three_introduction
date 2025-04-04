import * as THREE from "three";

export default class Truck extends THREE.Group {
  frame;
  constructor() {
    super();
    this.frame = 0;

    // 本体
    const box = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 8), new THREE.MeshBasicMaterial({ color: 0xdddddd }));
    box.position.y = 2;
    this.add(box);

    // 車輪1
    const wheel1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 5, 10), new THREE.MeshBasicMaterial({ color: 0xaaaaaa }));
    wheel1.rotation.z = (90 * Math.PI) / 180;
    wheel1.position.z = -2;
    this.add(wheel1);

    // 車輪2
    const wheel2 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 5, 10), new THREE.MeshBasicMaterial({ color: 0xaaaaaa }));
    wheel2.rotation.z = (90 * Math.PI) / 180;
    wheel2.position.z = 2;
    this.add(wheel2);
  }
}
