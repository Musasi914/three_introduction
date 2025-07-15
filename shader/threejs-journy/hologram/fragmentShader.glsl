varying vec3 vPosition;
varying vec3 vNormal;
uniform float uTime;

void main() {
  float stripe = mod((vPosition.y - uTime * 0.02) * 20.0, 1.0);
  stripe = pow(stripe, 3.0);

  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  if(!gl_FrontFacing) {
    normal *= -1.0;
  }
  float fresnel = dot(normal, viewDirection) + 1.0;
  fresnel = pow(fresnel, 2.0);

  float fallOff = smoothstep(0.8, 0.0, fresnel);

  float hologram = stripe * fresnel;
  hologram += fresnel  * 1.25;
  hologram *= fallOff;

  gl_FragColor = vec4(1.0, 0.0, 0.0, hologram);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}