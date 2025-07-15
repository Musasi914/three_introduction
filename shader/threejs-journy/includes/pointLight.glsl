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