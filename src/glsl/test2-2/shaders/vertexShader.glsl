uniform vec2 uFrequency;
uniform float uAmplitude;
uniform float uTime;

varying float vElevation;

#include "/lygia/generative/cnoise.glsl"

void main() {
  vec4 modelPos = modelMatrix * vec4(position, 1.0);
  float elevation = sin(modelPos.x * uFrequency.x + uTime) * uAmplitude
             * sin(modelPos.z * uFrequency.y + uTime) * uAmplitude;
  for(float i = 1.0; i <= 3.0; i++) {
    elevation -= abs(cnoise(vec3(modelPos.xz * 3.0 * i, uTime * 0.2)) * 0.2 / i);
  }
  modelPos.y += elevation;
  gl_Position = projectionMatrix * viewMatrix * modelPos;

  vElevation = elevation;
}