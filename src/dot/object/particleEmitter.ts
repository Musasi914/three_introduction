import * as THREE from "three";

const PARTICLENUM = 3000;

/** 球の半径 */
const RADIUS = 55;

/** カラーリスト */
const COLOR_LIST = [0xffff00, 0xffffdd, 0xffffff];

export default class ParticleEmitter extends THREE.Group {
  private texture;
  /** updateでparticleそれぞれ更新するため */
  private particles;

  constructor() {
    super();

    this.texture = new THREE.TextureLoader().load("/particle.png");
    this.particles = [];

    for (let i = 0; i < PARTICLENUM; i++) {
      const particle = this.createParticle();
      this.add(particle);
      this.particles.push(particle);
    }
  }

  private createParticle() {
    const rand = Math.floor(Math.random() * 3);
    const color = COLOR_LIST[rand];

    const material = new THREE.SpriteMaterial({
      color,
      map: this.texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.3,
    });
    const sprite = new THREE.Sprite(material);

    const phi = ((Math.random() * 180 - 90) * Math.PI) / 180;
    const theta = (Math.random() * 360 * Math.PI) / 180;
    const radius = RADIUS;
    sprite.position.x = radius * Math.cos(phi) * Math.cos(theta) * -1;
    sprite.position.y = radius * Math.sin(phi);
    sprite.position.z = radius * Math.cos(phi) * Math.sin(theta);
    sprite.scale.multiplyScalar(Math.random() * 5 + 1);

    return sprite;
  }

  update(frontVector: THREE.Vector3) {
    const target = frontVector.clone();

    this.particles.map((particle) => {
      const dot = particle.position.clone().normalize().dot(target);
      let opacity = (dot - 0.8) / 0.2;
      opacity = opacity * Math.random();
      particle.material.opacity = opacity;
    });
  }
}
