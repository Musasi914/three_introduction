import * as THREE from "three";

const PARTICLENUM = 3000;

const RADIUS = 50;

const COLORS = [0xffff00, 0xffffff, 0xffffdd];

export default class ParticleEmitter extends THREE.Group {
  particles;

  constructor() {
    super();

    this.particles = [];

    for (let i = 0; i < PARTICLENUM; i++) {
      const material = new THREE.SpriteMaterial({
        map: new THREE.TextureLoader().load("/particle.png"),
        color: COLORS[Math.floor(Math.random() * 3)],
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
      });

      const sprite = new THREE.Sprite(material);

      const phi = (Math.random() - 0.5) * 180;
      const theta = (Math.random() - 0.5) * 360;
      const x = -RADIUS * Math.cos(phi) * Math.cos(theta);
      const y = RADIUS * Math.sin(phi);
      const z = RADIUS * Math.cos(phi) * Math.sin(theta);
      sprite.position.set(x, y, z);

      sprite.scale.multiplyScalar(1 + Math.random() * 5);

      this.add(sprite);

      this.particles.push(sprite);
    }
  }

  update(frontVec: THREE.Vector3) {
    this.particles.map((particle) => {
      const particleVec = particle.position.clone().normalize();
      const dot = frontVec.clone().dot(particleVec);
      const opacity = (dot - 0.8) / 0.2;
      particle.material.opacity = opacity * Math.random();
    });
  }
}
