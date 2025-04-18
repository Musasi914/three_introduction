uniform float uWaveLength;
uniform vec2 uFrequency;
uniform float uTime;
uniform float uWaveSpeed;
uniform float uSmallWaveElevation;
uniform float uSmallWaveFrequency;
uniform float uSmallWaveSpeed;

varying float vElevation;

#include "/lygia/generative/cnoise.glsl"

void main() {
  vec4 modelPos = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPos.x * uFrequency.x + uTime * uWaveSpeed) * uWaveLength * sin(modelPos.z * uFrequency.y + uTime * uWaveSpeed) * uWaveLength;
  for(float i = 1.0; i <= 2.0; i++){
    elevation -= abs(cnoise(vec3(modelPos.xz * uSmallWaveFrequency * i, uTime * uSmallWaveSpeed))) * uSmallWaveElevation / i;
  }
  modelPos.y += elevation;
  
  vec4 viewPos = viewMatrix * modelPos;
  gl_Position = projectionMatrix * viewPos;

  vElevation = elevation;
}