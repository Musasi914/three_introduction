import * as THREE from "three";
import { Camera } from "../Camera.js";

export default class InGrow extends THREE.Object3D {
  constructor() {
    super();
    const geometry = new THREE.SphereGeometry(2.03, 40, 40);
    const camera = Camera.getInstance();
    const material = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x96ecff) },
        viewVector: { value: camera.position },
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float opacity;
        void main()
        {
          vec3 nNormal = normalize(normal);
          vec3 nViewVec = normalize(viewVector);

          opacity = dot(nNormal, nViewVec);
          opacity = 1.0 - opacity;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float opacity;
        void main()
        {
          gl_FragColor = vec4(glowColor, opacity);
        }
      `,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);
  }
}
