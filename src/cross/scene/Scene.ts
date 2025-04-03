import * as THREE from "three";
import Course from "../object/Course.js";
import Truck from "../object/Truck.js";

export default class Scene extends THREE.Scene {
  course: Course;
  truck: Truck;
  frame;

  constructor() {
    super();

    this.frame = 0;

    // 環境光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.add(ambientLight);

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.add(directionalLight);

    // axios
    this.add(new THREE.AxesHelper(25));

    // 床
    const gridHelper = new THREE.GridHelper(50, 30);
    gridHelper.position.y = -10;
    this.add(gridHelper);

    // コース
    this.course = new Course();
    this.add(this.course);

    // トロッコ
    this.truck = new Truck();
    this.truck.scale.multiplyScalar(0.5);
    this.truck.position.copy(this.course.points[0]);
    this.add(this.truck);
  }

  update(startTime: number) {
    const progress = (Date.now() - startTime) / 6000;
    this.frame = Math.round(360 * (progress - Math.floor(progress)));

    let currentPoint = this.course.points[this.frame];
    let nextPoint = this.course.points[this.frame + 1];
    const frontVec = currentPoint.clone().sub(nextPoint).normalize();
    const sideVec = new THREE.Vector3(0, 0, -1);
    const normalVec = frontVec.cross(sideVec);

    this.truck.position.copy(this.course.points[this.frame]);
    this.truck.lookAt(this.course.points[this.frame + 1]);
    this.truck.up.set(normalVec.x, normalVec.y, normalVec.z);
  }
}
