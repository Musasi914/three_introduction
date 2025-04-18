varying vec2 vUv;
varying float vElevation;

uniform sampler2D uTexture;
uniform sampler2D shadowMap;
uniform mat4 lightMatrix;

void main(){
  vec4 texColor = texture2D(uTexture, vUv);
  texColor.rgb *= vElevation + 0.5;
  gl_FragColor = vec4(texColor);
}