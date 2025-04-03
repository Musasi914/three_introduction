import * as THREE from "three";

/** 1秒あたり角度 */
const DEGREES = 150;

export default class FlashLight extends THREE.Group {
  /** 正面ベクトル */
  frontVector: THREE.Vector3;
  /** 絞り値 */
  private aperture;
  /** 回転角度 */
  private angle;

  constructor() {
    super();

    this.frontVector = new THREE.Vector3(0, 1, 0);
    this.aperture = 0.2;
    this.angle = 0;

    // 持ちて
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 10), new THREE.MeshBasicMaterial({ color: 0xcccccc }));
    handle.rotation.z = (-90 * Math.PI) / 180;
    this.add(handle);

    // 頭
    const head = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1, 1.5, 10), new THREE.MeshBasicMaterial({ color: 0xaaaaaa }));
    head.rotation.z = (-90 * Math.PI) / 180;
    head.position.x = 2;
    this.add(head);

    // ビーム
    const beamTexture = new THREE.TextureLoader().load("/beam.png");
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(15, 0.5, 20, 40, 10, true),
      new THREE.MeshBasicMaterial({
        color: 0xffff55,
        transparent: true,
        opacity: 0.3,
        map: beamTexture,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      })
    );
    beam.rotation.z = (-90 * Math.PI) / 180;
    beam.position.x = 12;
    this.add(beam);
  }

  update(startTime: number) {
    const progress = (Date.now() - startTime) / 1000;
    this.angle = DEGREES * progress;
    const radian = (this.angle * Math.PI) / 180;

    this.rotation.z = radian;

    // 正面ベクトルを更新
    const x = Math.cos(radian);
    const y = Math.sin(radian);
    this.frontVector = new THREE.Vector3(x, y, 0);
  }
}
