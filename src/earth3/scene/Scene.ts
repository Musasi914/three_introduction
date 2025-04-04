import * as THREE from "three";
import Earth from "../object/Earth.js";
import CityPoint from "../object/CityPoint.js";

/** 主要都市緯度経度一覧 **/
const pointsList: [number, number][] = [
  [51.2838, 0], // イギリス
  [39, -116], // 北京
  [34, 118], // ロサンゼルス
  [-33, 151], // シドニー
  [-23, -46], // サンパウロ
  [1, 103], // シンガポール
  [90, 0], // 北極
  [-90, 0], // 南極
];

export default class Scene extends THREE.Scene {
  frame;
  earth;
  japan;
  equator;

  constructor() {
    super();

    this.frame = 0;

    // 環境光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.06);
    this.add(ambientLight);

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-1, 1, 0);
    this.add(directionalLight);

    // axios
    this.add(new THREE.AxesHelper(500));

    // 床
    const gridHelper = new THREE.GridHelper(500);
    this.add(gridHelper);

    // 地球
    this.earth = new Earth();
    this.add(this.earth);

    // 日本
    this.japan = new CityPoint(0xff00ff, 35.6813, 139.767066);
    this.add(this.japan);

    // 世界

    pointsList.forEach((point) => {
      const city = new CityPoint(0xffff00, point[0], point[1]);
      this.add(city);

      // クオータニオンから　線を描画
      const startPos = this.japan.position.clone();

      const points = [startPos];

      const endPos = city.position.clone();

      const axis = startPos.clone().cross(endPos).normalize();
      const angle = startPos.clone().angleTo(endPos);

      for (let i = 0; i < 100; i++) {
        const quaternion = new THREE.Quaternion();
        quaternion.setFromAxisAngle(axis, (angle * i) / 100);

        const vertex = startPos.clone().applyQuaternion(quaternion);
        points.push(vertex);
      }

      points.push(endPos);

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ color: "blue" });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      this.add(line);
    });

    // 赤道
    this.equator = new CityPoint("red", 0, 0);
    this.add(this.equator);

    // const points = [new THREE.Vector3(2000, 0, 0), new THREE.Vector3(-2000, 0, 0)];
  }

  update(startTime: number) {
    this.equator.equatorUpdate();
    this.earth.update();
  }
}
