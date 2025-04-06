import * as THREE from "three";
import { Spark } from "./Spark.js";

export default class SparkEmitter extends THREE.Group {
  sparkNum = 500;
  sparkList: Spark[] = [];

  constructor() {
    super();

    const perAngle = 360 / this.sparkNum;

    for (let i = 0; i < this.sparkNum; i++) {
      const rad = (perAngle * i * Math.PI) / 180;
      const spark = new Spark();
      spark.rotation.x = 50 * Math.sin(rad);
      spark.rotation.z = rad;
      this.add(spark);
      this.sparkList.push(spark);
    }
  }
  update() {
    this.sparkList.forEach((spark) => {
      spark.update();
    });
  }
}
