import * as THREE from "three";
import BasicView from "./base/BasicView.js";
import GridAxesHelper from "./base/grid_axesHelper.js";
import OrbitCon from "./base/OrbitCon.js";
import LightSet from "./base/LightSet.js";
import { Sky, Water } from "three/examples/jsm/Addons.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class DemoCubesWorld extends BasicView {
  water: Water;
  meshList: THREE.Mesh[] = [];
  sky;
  constructor() {
    super();

    // ライト
    const light = new LightSet();
    this.scene.add(light);

    //water
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    this.water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load("/waternormals.jpg", (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: this.scene.fog !== undefined,
    });
    this.water.rotation.x = -Math.PI / 2;
    this.water.position.z = -4000;
    this.scene.add(this.water);

    // tl
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".body",
        start: "top top",
        end: "bottom bottom",
        scrub: 10,
      },
    });
    tl.to(this.camera.position, { z: -4000 });

    let sunPosDeg = {
      phi: (88 * Math.PI) / 180,
      theta: (180 * Math.PI) / 180,
    };

    tl.fromTo(sunPosDeg, { phi: (88 * Math.PI) / 180 }, { phi: (90.7 * Math.PI) / 180 }, "<");

    // skybox
    this.sky = new Sky();
    this.sky.scale.setScalar(450000);

    const skyUniforms = this.sky.material.uniforms;

    gsap.fromTo(
      skyUniforms["rayleigh"],
      { value: 3 },
      { value: 5, scrollTrigger: { trigger: ".fourth", scrub: 1, start: "top 80%", end: "top center" } }
    );

    gsap.to(".canvas", { opacity: 0, scrollTrigger: { trigger: ".fourth", scrub: 1, start: "top center", end: "top top" } });
    skyUniforms["turbidity"].value = 4;
    // skyUniforms["rayleigh"].value = 3;
    skyUniforms["mieCoefficient"].value = 0.003;
    skyUniforms["mieDirectionalG"].value = 0.8;

    gsap.ticker.add(() => {
      const sunPosition = new THREE.Vector3().setFromSphericalCoords(1, sunPosDeg.phi, sunPosDeg.theta);
      this.sky.material.uniforms.sunPosition.value = sunPosition;
    });
    this.scene.add(this.sky);

    // box
    const geometry = new THREE.BoxGeometry(30, 30, 30);
    const material = new THREE.MeshStandardMaterial({ roughness: 1, color: 0xdddddd });
    for (let i = 0; i < 50; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      let x: number;
      do {
        x = (Math.random() - 0.5) * 2000;
      } while (x > -100 && x < 100);

      mesh.position.x = x;
      mesh.position.z = -Math.random() * 4000;
      mesh.position.y = Math.random() * 500;
      gsap.to(mesh.rotation, { x: Math.PI * 2, duration: Math.random() * 6 + 3, repeat: -1, ease: "none" });
      gsap.to(mesh.rotation, { y: Math.PI * 2, duration: Math.random() * 6 + 3, repeat: -1, ease: "none" });
      // gsap.to(mesh.position, { y: -50, repeat: -1, yoyo: true, duration: Math.random() * 10 + 2, yoyoEase: "power2.inOut" });
      this.scene.add(mesh);
      this.meshList.push(mesh);
    }

    this.startRendering();
  }

  onAnimate() {
    this.water.material.uniforms["time"].value += 1 / 60;
    // this.controls.update();
  }
}

new DemoCubesWorld();
