vec3 directionalLight(vec3 lightColor, float lightIntensity, vec3 normal, vec3 lightPosition, vec3 viewDirection, float shininess) {
  vec3 lightDirection = normalize(lightPosition);

  vec3 light = vec3(0.0);
  light += lightColor * lightIntensity * max(dot(normal, lightDirection), 0.0);

  vec3 lightReflection = reflect(-lightDirection, normal);
  float specular = pow(max(-dot(lightReflection, viewDirection), 0.0), shininess);
  light += specular * lightColor * lightIntensity;

  return light;
}