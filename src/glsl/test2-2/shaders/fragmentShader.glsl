uniform vec3 uSurfaceColor;
uniform vec3 uDepthColor;
varying float vElevation;

void main() {
  vec3 color = mix(uDepthColor, uSurfaceColor, (vElevation + 0.1) * 2.0);
  gl_FragColor = vec4(color,1);
}