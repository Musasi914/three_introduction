uniform float uWaveLength;
uniform vec2 uFrequency;
uniform float uTime;
uniform float uWaveSpeed;

varying float vElevation;

void main() {
  vec4 modelPos = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPos.x * uFrequency.x + uTime * uWaveSpeed) * uWaveLength * sin(modelPos.z * uFrequency.y + uTime * uWaveSpeed) * uWaveLength;
  modelPos.y += elevation;
  
  vec4 viewPos = viewMatrix * modelPos;
  gl_Position = projectionMatrix * viewPos;

  vElevation = elevation;
}