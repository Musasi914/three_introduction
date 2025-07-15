uniform vec3 uColor;
varying vec3 vNormal;
varying vec3 vPosition;

vec3 ambientLight(vec3 lightColor, float lightIntensity) {
  return lightColor * lightIntensity;
}

vec3 directionalLight(vec3 lightColor, float lightIntensity, vec3 normal, vec3 lightPosition, vec3 viewDirection, float shininess) {
  vec3 lightDirection = normalize(lightPosition);

  vec3 light = vec3(0.0);
  light += lightColor * lightIntensity * max(dot(normal, lightDirection), 0.0);

  vec3 lightReflection = reflect(-lightDirection, normal);
  float specular = pow(max(dot(lightReflection, viewDirection), 0.0), shininess);
  light += specular * lightColor * lightIntensity;

  return light;
}

vec3 pointLight(vec3 lightColor, float lightIntensity, vec3 normal, vec3 lightPosition, vec3 viewDirection, float shininess, vec3 position, float lightDecay) {
  vec3 lightDelta = lightPosition - position;
  float lightDistance = length(lightDelta);
  vec3 lightDirection = normalize(lightDelta);

  vec3 light = vec3(0.0);
  light += lightColor * lightIntensity * max(dot(normal, lightDirection), 0.0);

  vec3 lightReflection = reflect(-lightDirection, normal);
  float specular = pow(max(dot(lightReflection, viewDirection), 0.0), shininess);
  light += specular * lightColor * lightIntensity;

  float decay = 1.0 - lightDistance * lightDecay;
  decay = max(0.0, decay);

  return lightColor * lightIntensity * decay * light;
}

void main() {
  vec3 color = vec3(uColor);
  vec3 viewDirection = normalize(cameraPosition - vPosition);
  vec3 normal = normalize(vNormal);

  vec3 light = ambientLight(vec3(1.0), 0.2);
  light += directionalLight(vec3(0.1, 0.1, 1.0), 1.0, normal, vec3(0.0, 0.0, 3.0), viewDirection, 100.0);
  light += pointLight(vec3(1.0, 0.1, 0.1), 1.0, normal, vec3(0.0, 2.5, 0.0), viewDirection, 20.0, vPosition, 0.3);

  color *= light;

  gl_FragColor = vec4(color, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}