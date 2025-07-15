varying vec2 vUv;

uniform sampler2D uPerlinTexture;
uniform float uTime;

vec2 rotate2D(vec2 value, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  mat2 m = mat2(c, s, -s, c);
  return m * value;
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // Twist
  float twistPerlin = texture(uPerlinTexture, vec2(0.5, uv.y * 0.2 - uTime * 0.1)).r;
  float angle = twistPerlin * 10.0;
  modelPosition.xz = rotate2D(modelPosition.xz, angle);

  // Wind
  vec2 windOffset = vec2(
    texture(uPerlinTexture, vec2(0.25, uTime * 0.01)).r - 0.5, 
    texture(uPerlinTexture, vec2(0.75, uTime * 0.01)).r - 0.5
  );
  windOffset *= pow(uv.y, 2.0) * 10.0;
  modelPosition.xz += windOffset;

  vec4 modelViewPosition = viewMatrix * modelPosition;
  vec4 modelViewProjectionPosition  = projectionMatrix * modelViewPosition;
  
  gl_Position = modelViewProjectionPosition;

  vUv = uv;
}