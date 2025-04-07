import * as THREE from "three";
import BasicView from "./base/BasicView.js";
import GridAxesHelper from "./base/grid_axesHelper.js";
import OrbitCon from "./base/OrbitCon.js";
import gsap, { Bounce, Cubic, Expo } from "gsap";

class DemoCubesWorld extends BasicView {
  /** カメラの円運動 */
  rot = 0;
  /** カメラの座標管理用オブジェクト */
  cameraPositionTarget: THREE.Vector3;
  /** カメラの視点管理用オブジェクト */
  cameraLookAtTarget: THREE.Vector3;
  /** ボックス一辺の長さ */
  private readonly STEP = 100;
  /** オブジェクトの個数 */
  private readonly OBJ_NUM = 2000;
  /** update用配列 */
  private edgesPool: THREE.LineSegments[] = [];

  constructor() {
    super();

    // 地面
    const gridAxes = new GridAxesHelper(5000, this.STEP, 0x444444);
    this.scene.add(gridAxes);

    // kokokara
    this.scene.fog = new THREE.Fog(0x000000, 100, 13000);
    this.cameraPositionTarget = new THREE.Vector3();
    this.cameraLookAtTarget = new THREE.Vector3();

    // カメラの動きをtweenで作る
    const tl = gsap.timeline({ repeat: -1 });
    tl.set(this, { rot: 135 }, 0);
    tl.to(this, { rot: 0, duration: 7, ease: Cubic.easeInOut }, 0);
    tl.set(this.cameraPositionTarget, { y: 0 }, 0);
    tl.to(this.cameraPositionTarget, { y: 400, duration: 6, ease: Cubic.easeInOut }, 0);
    tl.set(this.cameraLookAtTarget, { y: 500 }, 0);
    tl.to(this.cameraLookAtTarget, { y: 0, duration: 6, ease: Cubic.easeInOut }, 0);

    // ボックス追加
    const geometryBox = new THREE.BoxGeometry(this.STEP, this.STEP, this.STEP);
    const edges = new THREE.EdgesGeometry(geometryBox);
    const materialBox = new THREE.LineBasicMaterial({ color: 0xff0000 });

    for (let i = 0; i < this.OBJ_NUM; i++) {
      const edh = new THREE.LineSegments(edges, materialBox);
      edh.position.x = this.STEP * Math.floor(((Math.random() - 0.5) * 10000) / this.STEP) + this.STEP / 2;
      edh.position.z = this.STEP * Math.floor(((Math.random() - 0.5) * 10000) / this.STEP) + this.STEP / 2;
      // edh.updateMatrix();
      this.scene.add(edh);
      this.edgesPool.push(edh);

      tl.set(edh.position, { y: 8000 }, 0);
      tl.to(edh.position, { y: this.STEP / 2 + 1, duration: 2 * Math.random() + 3, ease: Bounce.easeOut }, 0);
    }

    // const totalTl = gsap.timeline();
    // tl.call(
    //   () => {
    //     totalTl
    //       .set(tl, { timeScale: 1 })
    //       .to(tl, { timeScale: 0.01, duration: 1.5, ease: Expo.easeInOut }, "+=0.8")
    //       .to(tl, { timeScale: 1, ease: Expo.easeInOut });
    //   },
    //   [],
    //   0
    // );

    this.startRendering();
  }

  onAnimate() {
    // this.rot += 0.1;
    this.camera.position.x = 1000 * Math.cos((this.rot * Math.PI) / 180);
    this.camera.position.z = 1000 * Math.sin((this.rot * Math.PI) / 180);
    this.camera.position.y = this.cameraPositionTarget.y;
    this.camera.lookAt(0, 0, 0);
  }
}

new DemoCubesWorld();
