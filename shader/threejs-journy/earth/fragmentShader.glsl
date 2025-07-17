varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudsTexture;
uniform vec3 uSunPosition;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereNightColor;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  // Sun Direction
  vec3 uSunPosition = normalize(uSunPosition);
  float sunOrientation = dot(normal, uSunPosition);
  float dayMix = smoothstep(-0.25, 0.5, sunOrientation);

  // Textures
  vec3 dayColor = texture(uDayTexture, vUv).rgb;
  vec3 nightColor = texture(uNightTexture, vUv).rgb;

  color = mix(nightColor, dayColor, dayMix);

  // Clouds
  vec2 specularCloudsColor = texture(uSpecularCloudsTexture, vUv).rg;
  float cloudsMix = specularCloudsColor.g;
  cloudsMix = smoothstep(0.4, 1.0, cloudsMix);
  cloudsMix *= dayMix;

  color = mix(color, vec3(1.0), cloudsMix);

  // Atmosphere
  float atmosphereMix = smoothstep(-0.5, 1.0, sunOrientation);
  vec3 atmosphereColor = mix(uAtmosphereNightColor, uAtmosphereDayColor, atmosphereMix);

  float fresnel = dot(viewDirection, normal) + 1.0;
  fresnel = pow(fresnel, 2.0);

  color = mix(color, atmosphereColor, fresnel * atmosphereMix);

  // Specular
  vec3 reflection = reflect(-uSunPosition, normal);
  float specular = max(-dot(reflection, viewDirection), 0.0);
  specular = pow(specular, 160.0);
  specular *= specularCloudsColor.r;

  vec3 specularColor = mix(vec3(1.0), atmosphereColor, fresnel);

  color += specular * specularColor;

  // Final color
  gl_FragColor = vec4(color, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}