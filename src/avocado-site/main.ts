import * as THREE from "three";
import BasicView from "./base/BasicView.js";
import LightSet from "./base/LightSet.js";
import { GLTFLoader, LineGeometry } from "three/examples/jsm/Addons.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class Avocado extends BasicView {
  avocadoModel: THREE.Group = new THREE.Group();

  constructor() {
    super();

    // ライト
    const light = new LightSet();
    this.scene.add(light);

    // アボカド
    this.getAvocadoModel().then((model) => {
      this.avocadoModel = model;

      // 初期
      this.avocadoModel.scale.multiplyScalar(90);
      this.avocadoModel.position.x = 3;

      // top
      const rotateAvocado = gsap.to(this.avocadoModel.rotation, {
        y: Math.PI * 2,
        duration: 9,
        ease: "none",
        repeat: -1,
      });

      // about
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 60%",
            end: "center 60%",
            scrub: true,
            onEnter: () => {
              rotateAvocado.pause();
              gsap.to(this.avocadoModel.rotation, { y: 0 });
            },
            onLeaveBack: () => {
              rotateAvocado.restart();
              gsap.to(this.avocadoModel.position, { x: 3, z: 0 });
            },
          },
        })
        .to(this.avocadoModel.position, { x: -1.5, z: 4 }, 0);

      // cta
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cta",
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        })
        .to(this.avocadoModel.position, { x: 2, z: 0 }, 0)
        .to(this.avocadoModel.rotation, { y: Math.PI * 2 }, 0);

      // foot
      gsap.to(this.avocadoModel.position, {
        x: 0,
        y: 1,
        z: -1,
        scrollTrigger: {
          trigger: ".foot",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      this.scene.add(this.avocadoModel);

      loadEvent();
    });

    this.startRendering();
  }

  async getAvocadoModel() {
    const loader = new GLTFLoader();
    const loadEl = document.querySelector("#loader") as HTMLElement;
    const gltf = await loader.loadAsync("/glb-avocado/Avocado.glb", (event) => {
      const progress = Math.floor((event.loaded / event.total) * 100);
      console.log(progress);
      loadEl.textContent = `${progress}%`;
      if (progress === 100) {
        gsap.to(loadEl, { autoAlpha: 0, duration: 1 });
      }
    });
    return gltf.scene;
  }

  onAnimate() {
    // this.avocadoModel.rotation.y = this.avocadoModel.rotation.y > Math.PI * 2 ? 0 : this.avocadoModel.rotation.y + 0.01;
  }
}

new Avocado();

function loadEvent() {
  // start
  gsap.set(".top_word", { y: 50, autoAlpha: 0 });
  gsap.fromTo(
    ".top_word",
    {
      y: 50,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      delay: 0.2,
      stagger: 0.5,
    }
  );

  // bg
  function animateBg(el: string, move: string, back: string) {
    ScrollTrigger.create({
      trigger: el,
      start: "top center",
      onEnter: () => {
        gsap.to(".bg-yellow", { width: move, duration: 0.2 });
      },
      onLeaveBack: () => {
        gsap.to(".bg-yellow", { width: back, duration: 0.2 });
      },
    });
  }

  animateBg(".about", "40%", "0%");
  animateBg(".cta", "60%", "40%");
  animateBg(".foot", "100%", "60%");
}
