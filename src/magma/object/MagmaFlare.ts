import * as THREE from "three";
import Magma from "./Magma.js";
import Aura from "./Aura.js";
import FlareEmitter from "./FlareEmitter.js";
import InGrow from "./InGrow.js";
import SparkEmitter from "./SparkEmitter.js";
import { OutGlow } from "../OutGlow.js";

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

    //
    const outGlow = new OutGlow();
    this.add(outGlow);
  }

  update() {
    this.magma.update();
    this.aura.update();
    this.flare.update();
    this.sparkEmitter.update();
  }
}
