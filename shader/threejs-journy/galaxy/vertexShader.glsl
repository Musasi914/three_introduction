attribute float aScale;
attribute vec3 aRandom;
uniform float uSize;
uniform float uTime;

varying vec3 vColor;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  float distanceToCenter = length(modelPosition.xz);
  float angle = atan(modelPosition.x, modelPosition.z);
  float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;
  angle += angleOffset;
  modelPosition.x = cos(angle) * distanceToCenter;
  modelPosition.z = sin(angle) * distanceToCenter;
  
  modelPosition.xyz += aRandom;
  
  vec4 modelViewPosition = viewMatrix * modelPosition;
  vec4 modelViewProjectionPosition  = projectionMatrix * modelViewPosition;
  
  gl_Position = modelViewProjectionPosition;

  gl_PointSize = uSize * aScale;
  gl_PointSize *= ( 1.0 / - modelViewPosition.z );

  vColor = color;
}