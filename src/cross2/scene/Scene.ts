import * as THREE from "three";
import Rail from "../object/Rail.js";
import Truck from "../object/Truck.js";

export default class Scene extends THREE.Scene {
  rail: Rail;
  truck: Truck;
  frame;
  frontVec;
  normal;
  constructor() {
    super();

    this.frame = 0;
    this.frontVec = new THREE.Vector3(0, 0, 0);
    this.normal = new THREE.Vector3(0, 0, 0);

    this.add(new THREE.GridHelper(100));
    this.add(new THREE.AxesHelper(50));

    this.rail = new Rail();
    this.add(this.rail);

    this.truck = new Truck();
    this.add(this.truck);
  }

  update(startTime: number) {
    let progress = (Date.now() - startTime) / 6000;
    let frame = Math.round(360 * (progress - Math.floor(progress)));

    this.truck.position.copy(this.rail.points[frame]);

    this.frontVec = this.rail.points[frame].clone().sub(this.rail.points[frame + 1]);

    this.truck.lookAt(this.rail.points[frame + 1]);

    this.normal = this.frontVec.clone().cross(new THREE.Vector3(0, 0, -1));
    this.truck.up.set(this.normal.x, this.normal.y, this.normal.z);
  }
}
