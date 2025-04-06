import * as THREE from "three";
import Magma from "./Magma.js";
import Aura from "./Aura.js";
import FlareEmitter from "./FlareEmitter.js";
import InGrow from "./InGrow.js";
import SparkEmitter from "./SparkEmitter.js";
import { OutGlow } from "../OutGlow.js";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

export default class MagmaFlare extends THREE.Group {
  magma;
  aura;
  flare;
  sparkEmitter;

  constructor() {
    super();

    // マグマ
    this.magma = new Magma();
    this.add(this.magma);

    // オーラ
    this.aura = new Aura();
    this.add(this.aura);

    // イングロー
    const inGrow = new InGrow();
    this.add(inGrow);

    // フレア
    this.flare = new FlareEmitter();
    this.add(this.flare);

    // スパーク
    this.sparkEmitter = new SparkEmitter();
    this.add(this.sparkEmitter);

    // アウトグロー
    const outGlow = new OutGlow();
    this.add(outGlow);

    const layers = {
      Magma: true,
      Aura: true,
      Flare: true,
      Spark: true,
      "Glow Inside": true,
      "Glow Outside": true,
    };

    const gui = new GUI();
    Object.keys(layers).forEach((key) => {
      gui.add(layers, key as keyof typeof layers);
    });
    gui.onChange((event) => {
      this.magma.visible = layers["Magma"];
      this.aura.visible = layers["Aura"];
      this.flare.visible = layers["Flare"];
      this.sparkEmitter.visible = layers["Spark"];
      outGlow.visible = layers["Glow Outside"];
      inGrow.visible = layers["Glow Inside"];
    });
    gui.close();
  }

  update() {
    this.magma.update();
    this.aura.update();
    this.flare.update();
    this.sparkEmitter.update();
  }
}
