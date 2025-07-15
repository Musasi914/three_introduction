void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 modelViewPosition = viewMatrix * modelPosition;
  vec4 modelViewProjectionPosition  = projectionMatrix * modelViewPosition;
  
  gl_Position = modelViewProjectionPosition;
}