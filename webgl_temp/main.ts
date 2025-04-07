import * as THREE from "three";
import BasicView from "./base/BasicView.js";
import GridAxesHelper from "./base/grid_axesHelper.js";

class DemoCubesWorld extends BasicView {
  constructor() {
    super();

    // 地面
    const gridAxes = new GridAxesHelper(5000);
    this.scene.add(gridAxes);

    this.startRendering();
  }

  onAnimate() {}
}

new DemoCubesWorld();
