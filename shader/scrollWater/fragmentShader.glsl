varying vec2 vUv;
uniform float u_ratio;
uniform float u_time;
uniform float u_speed;
uniform float u_shape_scale_y;

// Simplex noise taken from
// https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
  -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
  + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
  dot(x12.zw, x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Color space transform taken from
// https://gist.github.com/983/e170a24ae8eba2cd174f
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}


const float STEPS = 4.;

float get_noise(vec2 uv, float t){
  float SCALE = 5.0;
  float noise = snoise(vec2(uv.x * SCALE, uv.y * 2.4 * SCALE - .7 * t));
  SCALE = 7.;
  noise += snoise(vec2(uv.x * SCALE + .8 * t, uv.y * .6 * SCALE))* 0.2;
  noise = .2 * noise + .4;
  return noise;
}

void main () {
  vec2 uv = vUv;
  uv.y /= u_ratio;

  float t = u_time * 2.0;

  float noise = get_noise(uv, t);
  float shape = (uv.y) * u_shape_scale_y;

  float stepped_noise = floor(noise * STEPS) / STEPS;
  float d = pow(stepped_noise, .9);

  vec3 hsv = vec3(.52 + d * .1, .8 - .2 * d, d + .5 + .4);
  vec3 col = hsv2rgb(hsv);

  gl_FragColor = vec4(col, smoothstep(shape, shape + .1, noise * .8));
}