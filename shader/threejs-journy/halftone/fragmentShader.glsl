varying vec3 vNormal;
varying vec3 vPosition;
uniform vec3 uColor;
uniform vec2 uResolution;

vec3 ambientLight(vec3 lightColor, float lightIntensity) {
  return lightColor * lightIntensity;
}

vec3 directionalLight(vec3 lightColor, float lightIntensity, vec3 normal, vec3 lightPosition, vec3 viewDirection, float shininess) {
  vec3 lightDirection = normalize(lightPosition);

  vec3 light = vec3(0.0);
  light += lightColor * lightIntensity * max(dot(normal, lightDirection), 0.0);

  vec3 lightReflection = reflect(-lightDirection, normal);
  float specular = pow(max(-dot(lightReflection, viewDirection), 0.0), shininess);
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

vec3 halftone(
  vec3 color, 
  float repetitions, 
  vec3 direction, 
  float low, 
  float high, 
  vec3 pointColor,
  vec3 normal
) {
  float intensity = dot(direction, normal);
  intensity = smoothstep(low, high, intensity);
  
  vec2 uv = gl_FragCoord.xy / uResolution.y;
  uv *= repetitions;
  uv = mod(uv, 1.0);
  float point = distance(uv, vec2(0.5));
  point = 1.0 - step(0.5 * intensity, point);

  return mix(color, pointColor, point);
}

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = uColor;

  // Light
  vec3 light = vec3(0.0);
  light += ambientLight(vec3(1.0), 1.0);
  light += directionalLight(vec3(1.0), 1.0, normal, vec3(1.0, 1.0, 0.0), viewDirection, 100.0);
  
  color *= light;

  // Halftone
  vec3 shadowColor = vec3(0.5176, 0.0, 0.7961);
  vec3 highlightColor = vec3(0.9608, 0.9608, 0.9608);
  float repetitions = 100.0;
  vec3 direction = vec3(0.0, -1.0, 0.0);
  
  color = halftone(color, repetitions, direction, -0.8, 1.5, shadowColor, normal);
  color = halftone(color, 150.0, vec3(1.0, 1.0, 0.0), 0.5, 1.5, highlightColor, normal);

  // Final color
  gl_FragColor = vec4(color, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}