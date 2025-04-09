import * as THREE from "three";
import BasicView from "./base/BasicView.js";
import GridAxesHelper from "./base/grid_axesHelper.js";
import OrbitCon from "./base/OrbitCon.js";
import LightSet from "./base/LightSet.js";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class DemoCubesWorld extends BasicView {
  // controls: OrbitCon;
  mousePercentX: number;
  mousePercentY: number;

  constructor() {
    super();

    this.mousePercentX = 50;
    this.mousePercentY = 50;

    // 地面
    const gridAxes = new GridAxesHelper(400);
    // this.scene.add(gridAxes);

    // カメラ
    // this.controls = new OrbitCon(this.camera, this.renderer.domElement);

    // ライト
    const light = new LightSet();
    this.scene.add(light);

    // text
    let textGeo;
    let textMesh;

    const material = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true, shininess: 1 }); // front

    const loader = new FontLoader();
    loader.load("/font/helvetiker_regular.typeface.json", (font) => {
      textGeo = new TextGeometry("Three.js", {
        font: font,
        size: 70,
        depth: 20,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 1.5,
      });

      textGeo.computeBoundingBox();

      textMesh = new THREE.Mesh(textGeo, material);
      textMesh.position.x = -(textGeo.boundingBox?.max.x! - textGeo.boundingBox?.min.y!) * 0.5;
      textMesh.position.y = 30;
      this.scene.add(textMesh);

      const textMesh2 = new THREE.Mesh(textGeo, material);
      textMesh2.position.x = -(textGeo.boundingBox?.max.x! - textGeo.boundingBox?.min.y!) * 0.5;
      textMesh2.position.y = -30;
      textMesh2.rotation.x = Math.PI;
      this.scene.add(textMesh2);
    });

    // plane
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10000, 10000),
      new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0.5, transparent: true, shininess: 1 })
    );
    plane.rotation.x = -Math.PI / 2;
    this.scene.add(plane);

    // マウス
    window.addEventListener("mousemove", (e) => {
      this.mousePercentX = (e.offsetX / window.innerWidth) * 100;
      this.mousePercentY = (e.offsetY / window.innerHeight) * 100;
    });

    window.addEventListener("mouseout", () => {
      this.mousePercentX = 50;
      this.mousePercentY = 50;
    });

    // gsap
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first",
        scrub: 1,
        pin: true,

        onEnterBack: () => {
          gsap.to(this.camera.position, { z: 0 });
        },
      },
    });
    tl.to(this.camera.position, {
      z: -100,
    });
    tl.to(this.containerEl, { autoAlpha: 0 });
    // レンダリング
    this.startRendering();
  }

  onAnimate() {
    let targetOffset = this.mousePercentX - 50;
    let nowOffset = this.camera.position.x;
    let moveValueX = nowOffset + (targetOffset - nowOffset) * 0.02;
    this.camera.position.x = moveValueX;

    let targetOffsetY = (100 - this.mousePercentY) / 2;
    let nowOffsetY = this.camera.position.y;
    let moveValueY = nowOffsetY + (targetOffsetY - nowOffsetY) * 0.02;
    this.camera.position.y = moveValueY;
    // this.camera.lookAt(0, 0, 0);
  }
}

new DemoCubesWorld();
