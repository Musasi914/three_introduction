// return 0.0 to 1.0
float random2D(vec2 value) {
  return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
}