import * as THREE from "three";

export class Flare extends THREE.Object3D {
  map;
  offset = new THREE.Vector2();
  randomRatio = Math.random() + 1;

  constructor() {
    super();

    const topRadius = 6;
    const bottomRadius = 2;
    const diameter = topRadius - bottomRadius;
    const geometry = new THREE.CylinderGeometry(topRadius, bottomRadius, 0, 30, 3, true);

    this.map = new THREE.TextureLoader().load("/example1/aura3_type2.png");
    this.map.wrapS = this.map.wrapT = THREE.RepeatWrapping;
    this.map.repeat.set(10, 10);
    const material = this.createMaterial(bottomRadius, diameter);

    const mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);
  }

  private createMaterial(bottomRadius: number, diameter: number): THREE.ShaderMaterial {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        map: {
          value: this.map,
        },
        offset: {
          value: this.offset,
        },
        opacity: {
          value: 0.15,
        },
        innerRadius: {
          value: bottomRadius,
        },
        diameter: {
          value: diameter,
        },
      } as {
        map: THREE.IUniform<THREE.Texture>;
        offset: THREE.IUniform<THREE.Vector2>;
        opacity: THREE.IUniform<number>;
        innerRadius: THREE.IUniform<number>;
        diameter: THREE.IUniform<number>;
      },
      // language=GLSL
      vertexShader: `
        varying vec2 vUv;       // フラグメントシェーダーに渡すUV座標
        varying float radius;   // フラグメントシェーダーに渡す半径
        uniform vec2 offset;    // カラーマップのズレ位置

        void main()
        {
          // 本来の一からuvをずらす
          vUv = uv + offset;
          // 中心から頂点座標までの距離
          radius = length(position);
          // 3次元上頂点座標を画面上の二次元座標に変換(お決まり)
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      // language=GLSL
      fragmentShader: `
        uniform sampler2D map;      // テクスチャ
        uniform float opacity;      // 透明度
        uniform float diameter;     // ドーナツの太さ
        uniform float innerRadius;  // 内円の半径
        varying vec2 vUv;           // UV座標
        varying float radius;       // 中心ドットまでの距離
        const float PI = 3.1415926; // 円周率

        void main() {
          // UVの位置からテクスチャの色を取得
          vec4 tColor = texture2D(map, vUv);
          // 描画位置がドーナツの幅の何割の位置になるか
          float ratio = (radius - innerRadius) / diameter;
          float opacity = opacity * sin(PI * ratio);
          // ベースカラー
          vec4 baseColor = (tColor + vec4(0.0, 0.0, 0.3, 1.0));
          // 透明度を反映させる
          gl_FragColor = baseColor * vec4(1.0, 1.0, 1.0, opacity);
        }
      `,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });
    return material;
  }

  update() {
    this.offset.x = (performance.now() / 1000) * 0.2 * this.randomRatio;
    this.offset.y = (-performance.now() / 1000) * 0.8 * this.randomRatio;
  }
}
