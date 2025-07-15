  varying vec3 vNormal;
  varying vec3 vPosition;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 modelViewPosition = viewMatrix * modelPosition;
  vec4 modelViewProjectionPosition  = projectionMatrix * modelViewPosition;
  
  gl_Position = modelViewProjectionPosition;

  vNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
  vPosition = modelPosition.xyz;
}