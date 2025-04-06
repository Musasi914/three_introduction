import * as THREE from "three";

/**
 * アウトグロークラスです。
 */
export class OutGlow extends THREE.Object3D {
  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // テクスチャーを読み込みます。
    const loader = new THREE.TextureLoader();
    const map = loader.load("/example1/Particle01.png");

    // マテリアル
    const material = new THREE.SpriteMaterial({
      map: map,
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
      opacity: 0.8,
      transparent: true,
    });

    // スプライト
    const sprite = new THREE.Sprite(material);
    sprite.scale.multiplyScalar(8);
    this.add(sprite);
  }
}
