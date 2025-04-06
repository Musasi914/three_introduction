import * as THREE from "three";
import { Flare } from "./Flare.js";

export default class FlareEmitter extends THREE.Group {
  flareNum = 10;
  flareList: Flare[] = [];

  constructor() {
    super();

    const perAngle = 360 / this.flareNum;

    for (let i = 0; i < this.flareNum; i++) {
      const rad = (perAngle * i * Math.PI) / 180;
      const flare = new Flare();
      flare.rotation.x = rad;
      flare.rotation.y = rad;
      flare.rotation.z = rad / 2;
      this.add(flare);
      this.flareList.push(flare);
    }
  }
  update() {
    this.flareList.forEach((flare) => {
      flare.update();
    });
  }
}
