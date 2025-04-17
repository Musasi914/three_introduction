import * as THREE from "three";
import BasicView from "./base/BasicView.js";
import LightSet from "./base/LightSet.js";
import Earth from "./object/Earth.js";
import Mars from "./object/Mars.js";
import Venus from "./object/Venus.js";
import Pluto from "./object/Pluto.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class DemoCubesWorld extends BasicView {
  earth: Earth;
  mars: Mars;
  venus: Venus;
  pluto: Pluto;
  planetGroup: THREE.Group = new THREE.Group();
  planetArray: Array<Earth | Mars | Venus | Pluto> = [];
  RADIUS: number = 600;

  constructor() {
    super();

    const loadingManager = new THREE.LoadingManager();
    const $progress = document.querySelector(".progress") as HTMLElement;
    loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
      $progress.textContent = "Loading file: " + url + ".\nLoaded " + itemsLoaded + " of " + itemsTotal + " files.";
      console.log("Loading file: " + url + ".\nLoaded " + itemsLoaded + " of " + itemsTotal + " files.");
    };
    loadingManager.onLoad = function () {
      $progress.textContent = "complete!";
      gsap.to($progress, { opacity: 0, duration: 3 });
    };

    this.setHelpers();

    this.earth = new Earth(loadingManager);
    this.mars = new Mars(loadingManager);
    this.venus = new Venus(loadingManager);
    this.pluto = new Pluto(loadingManager);
    this.planetArray.push(this.earth, this.mars, this.venus, this.pluto);
    this.setPlanetPositions();

    let isRotating = false;
    let targetRotationY = 0;
    const text = document.querySelector(".desc-text") as HTMLElement;
    const title = document.querySelector(".desc-title") as HTMLElement;

    window.addEventListener("wheel", (e) => {
      if (isRotating) return;
      const direction = e.deltaY > 0 ? -1 : 1;
      targetRotationY += (direction * Math.PI) / 2;
      isRotating = true;
      const tl = gsap.timeline();
      tl.to(this.planetGroup.rotation, {
        y: targetRotationY,
        duration: 1,
        onComplete: () => {
          isRotating = false;
        },
      });
      tl.to(
        ".desc",
        {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            const position = Math.floor(Math.abs(targetRotationY) % (Math.PI * 2));
            switch (position) {
              case 0:
                title.textContent = "Earth";
                text.textContent = "こんな美しい惑星ある？";
                break;

              case 1:
                title.textContent = "Mars";
                text.textContent = "地球のすぐ外側を公転してる";
                break;

              case 3:
                title.textContent = "Venus";
                text.textContent = "地球に最も近い惑星";
                break;

              case 4:
                title.textContent = "Pluto";
                text.textContent = "太陽から最も遠い天体";
                break;

              default:
                break;
            }
          },
        },
        0
      );
      tl.to(".desc", { scale: 1, opacity: 1, duration: 0.2, ease: "back" }, 0.8);
    });

    this.startRendering();
  }

  setHelpers() {
    this.scene.add(new LightSet());
  }

  setPlanetPositions() {
    for (let i = 0; i < this.planetArray.length; i++) {
      const planet = this.planetArray[i];
      const radian = ((i + 1) * (360 / this.planetArray.length) * Math.PI) / 180;
      planet.position.x = this.RADIUS * Math.sin(radian);
      planet.position.z = this.RADIUS * Math.cos(radian);
      this.planetGroup.add(planet);
    }
    this.scene.add(this.planetGroup);
  }

  onAnimate() {
    this.planetArray.forEach((planet) => {
      planet.update();
    });
  }
}

new DemoCubesWorld();
