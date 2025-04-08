import * as THREE from "three";
import BasicView from "./base/BasicView.js";
import GridAxesHelper from "./base/grid_axesHelper.js";
import OrbitCon from "./base/OrbitCon.js";
import LightSet from "./base/LightSet.js";

class DemoCubesWorld extends BasicView {
  controls: OrbitCon;

  constructor() {
    super();

    // 地面
    const gridAxes = new GridAxesHelper(400);
    this.scene.add(gridAxes);

    // カメラ
    this.controls = new OrbitCon(this.camera, this.renderer.domElement);

    // ライト
    const light = new LightSet();
    this.scene.add(light);

    this.startRendering();
  }

  onAnimate() {
    this.controls.update();
  }
}

new DemoCubesWorld();
