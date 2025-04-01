import * as THREE from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
let rot = 0;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT);
camera.position.set(100, 550, 700);
camera.lookAt(0, 0, 0);

// 地面
scene.add(new THREE.GridHelper(600));
scene.add(new THREE.AxesHelper(300));

const mesh = new THREE.Mesh(new THREE.SphereGeometry(30, 30, 30), new THREE.MeshNormalMaterial());
scene.add(mesh);

// レンダー
function animate() {
  rot += 0.5;
  const radian = (rot * Math.PI) / 180;

  mesh.position.x = 200 * Math.sin(radian);
  mesh.position.y = 50;
  mesh.position.z = 200 * Math.cos(radian);

  // controls.update();
  renderer.render(scene, camera);

  const worldPosition = mesh.getWorldPosition(new THREE.Vector3());

  // スクリーン座標を取得
  const projection = worldPosition.project(camera);
  const sx = (WIDTH / 2) * (projection.x + 1);
  const sy = (HEIGHT / 2) * (-projection.y + 1);

  const tf = document.getElementById("hud");
  if (tf) {
    tf.innerHTML = `👆スクリーン座標(${Math.round(sx)}, ${Math.round(sy)})`;
    tf.style.transform = `translate(${sx}px, ${sy}px)`;
  }

  // SVGでラインを描画
  const line = document.getElementById("svgLine");
  if (line) {
    line.setAttribute("x2", `${sx}`);
    line.setAttribute("y2", `${sy}`);
  }
}
renderer.setAnimationLoop(animate);
