//https://github.com/xumo/liveglsl101/
/*
{
"IMPORTED": {
    "image1": {
      "PATH": "../imagenes/01.JPG",
    },
    "image2": {
      "PATH": "../imagenes/02.JPG",
    },
    "video1": {
      "PATH": "../videos/01.mp4",
    }
  }
}
*/

precision mediump float;
uniform vec2 resolution;
uniform sampler2D image1;

void main(){
  vec4 color = vec4(0.0,0.0,0.0,1.0);
  vec2 uv = gl_FragCoord.xy / resolution;
  float delta = 5.0;
  vec2 uvE = ( gl_FragCoord.xy + vec2( delta, 0.0) ) / resolution;
  vec2 uvO = ( gl_FragCoord.xy + vec2(-delta, 0.0) ) / resolution;
  vec2 uvN = ( gl_FragCoord.xy + vec2( 0.0, delta) ) / resolution;
  vec2 uvS = ( gl_FragCoord.xy + vec2( 0.0, -delta) ) / resolution;
  vec4 img = texture2D(image1, uv);
  vec4 imgE = texture2D(image1, uvE);
  vec4 imgO = texture2D(image1, uvO);
  vec4 imgN = texture2D(image1, uvN);
  vec4 imgS = texture2D(image1, uvS);

  float peso = 0.2;
  color = (1.0 - 4.0 * peso) * img + peso * imgE + peso * imgO + peso * imgN + peso * imgS;

  gl_FragColor = color;
}
