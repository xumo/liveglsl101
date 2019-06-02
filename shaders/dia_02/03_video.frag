//https://github.com/xumo/liveglsl101/
/*
{
"IMPORTED": {
    "video1": {
      "PATH": "../videos/01.mp4",
    }
  },
  "audio" : true
}
*/

precision mediump float;
uniform vec2 resolution;
uniform sampler2D video1;
uniform sampler2D spectrum;
uniform sampler2D samples;


void main(){
  vec4 color = vec4(0.5,0.6,0.0,1.0);
  vec2 uv = gl_FragCoord.xy / resolution;
  vec4 video = texture2D(video1, uv);
  float freq = texture2D(spectrum, vec2(uv.y, 2.0) ).g;
  float a = texture2D(samples, vec2(uv.x, 0.5) ).r;

  color *= freq ;
  gl_FragColor = color;
}
