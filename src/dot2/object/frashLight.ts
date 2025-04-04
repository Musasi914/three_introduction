import * as THREE from "three";

export default class FlashLight extends THREE.Group {
  frontVec;

  constructor() {
    super();

    this.frontVec = new THREE.Vector3(0, 1, 0);

    // 持ち手
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 10), new THREE.MeshBasicMaterial({ color: 0xcccccc }));
    handle.rotation.z = (-90 * Math.PI) / 180;
    this.add(handle);

    // 頭
    const head = new THREE.Mesh(new THREE.CylinderGeometry(2, 1, 1, 10), new THREE.MeshBasicMaterial({ color: 0xcccccc }));
    head.position.x = 2;
    head.rotation.z = (-90 * Math.PI) / 180;
    this.add(head);

    // ライト
    const light = new THREE.Mesh(
      new THREE.CylinderGeometry(10, 1, 20, 10, 10, true),
      new THREE.MeshBasicMaterial({
        color: 0xffff55,
        map: new THREE.TextureLoader().load("/beam.png"),
        side: THREE.DoubleSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.3,
        depthWrite: false,
      })
    );
    light.position.x = 12;
    light.rotation.z = (-90 * Math.PI) / 180;
    this.add(light);
  }
  update(startTime: number) {
    const progress = (Date.now() - startTime) / 1000;
    const degree = progress * 120;
    const radian = (degree * Math.PI) / 180;
    this.rotation.z = radian;

    this.frontVec = new THREE.Vector3(Math.cos(radian), Math.sin(radian), 0);
  }
}
