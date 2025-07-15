uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;

float random2D(vec2 value) {
  return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float glitchTime = uTime - modelPosition.y;
  float glitchStrength = sin(glitchTime) + sin(glitchTime * 3.0) + sin(glitchTime * 5.0);
  glitchStrength /= 3.0;
  glitchStrength = smoothstep(0.3, 1.0, glitchStrength);
  glitchStrength *= 0.25;

  modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;
  modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrength;
  
  vec4 modelViewPosition = viewMatrix * modelPosition;
  vec4 modelViewProjectionPosition  = projectionMatrix * modelViewPosition;
  
  gl_Position = modelViewProjectionPosition;

  vPosition = modelPosition.xyz;
  vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
  vNormal = modelNormal.xyz;
}