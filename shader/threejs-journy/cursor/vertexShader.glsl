uniform vec2 uResolution;
uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;

varying vec3 vColor;

attribute float aIntensity;
attribute float aAngle;

void main() {
  vec3 newPosition = position;
  float displacementIntensity = texture(uDisplacementTexture, uv).r;
  displacementIntensity = smoothstep(0.1, 0.4, displacementIntensity);

  vec3 displacement = vec3(cos(aAngle) * 0.2, sin(aAngle) * 0.2, 1.0);
  displacement = normalize(displacement);
  newPosition += displacement * displacementIntensity * 3.0 * aIntensity;
  
  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
  vec4 modelViewPosition = viewMatrix * modelPosition;
  vec4 modelViewProjectionPosition  = projectionMatrix * modelViewPosition;
  
  gl_Position = modelViewProjectionPosition;

  float pictureIntensity = texture(uPictureTexture, uv).r;


  gl_PointSize = 0.15 * uResolution.y * pictureIntensity;
  gl_PointSize *= (1.0 / - modelViewPosition.z);

  vColor = vec3(pow(pictureIntensity, 2.0));
}