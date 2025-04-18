uniform float uTime;
uniform float uFrequency;
uniform float uAmplitude;

// attribute vec2 uv; //組み込み
varying vec2 vUv;
varying float vElevation;

void main(){
  vec4 modelPos = modelMatrix * vec4(position, 1);
  
  float elevate;

  elevate = sin(modelPos.x * uFrequency + uTime) * uAmplitude;
  elevate += cos(modelPos.y * uFrequency + uTime) * uAmplitude; 
  modelPos.z += elevate;
  
  gl_Position = projectionMatrix * viewMatrix * modelPos;

  vElevation = elevate;
  vUv = uv;
}