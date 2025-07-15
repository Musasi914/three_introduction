attribute float size;
attribute float timeMultiplier;

uniform float uSize;
uniform vec2 uResolution;
uniform float uProgress;

float remap(
  float value, // 再マップしたい値
  float originMin,  // 別の範囲に変換する部分
  float originMax, 
  float destinationMin, // 宛先範囲の開始と終了
  float destinationMax
) {
  return clamp(0.0, 1.0, destinationMin + (value - originMin) * (destinationMax - destinationMin) / (originMax - originMin));
}

void main() {
  vec3 newPosition = position;
  float progress = uProgress * timeMultiplier;
  
  // Exploding
  float explodingProgress = remap(progress, 0.0, 0.1, 0.0, 1.0);
  explodingProgress  = 1.0 - pow(1.0 - explodingProgress, 3.0);
  newPosition *= explodingProgress;

  // Falling
  float fallingProgress = remap(progress, 0.1, 1.0, 0.0, 1.0);
  fallingProgress = 1.0 - pow(1.0 - fallingProgress, 3.0);
  newPosition.y -= fallingProgress * 0.2;

  // Scaling
  float sizeOpeningProgress = remap(progress, 0.0, 0.125, 0.0, 1.0);
  float sizeClosingProgress = remap(progress, 0.125, 1.0, 1.0, 0.0);
  float sizeProgress = min(sizeOpeningProgress, sizeClosingProgress);

  // Twinkling
  float twinklingProgress = remap(progress, 0.2, 0.8, 0.0, 1.0);
  float sizeTwinkling = sin(progress * 30.0) * 0.5 + 0.5; //0-1
  sizeTwinkling = 1.0 -twinklingProgress * sizeTwinkling;

  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
  vec4 modelViewPosition = viewMatrix * modelPosition;
  vec4 modelViewProjectionPosition  = projectionMatrix * modelViewPosition;
  
  gl_Position = modelViewProjectionPosition;
  gl_PointSize = uSize * uResolution.y * sizeProgress * sizeTwinkling;
  gl_PointSize *= (1.0 / -modelViewPosition.z);
  gl_PointSize *= size;

  if(gl_PointSize < 1.0) {
    gl_Position = vec4(9999.9);
  }
}