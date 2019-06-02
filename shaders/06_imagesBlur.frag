/*

{
"IMPORTED": {
  "image1": {
    "PATH": "./imagenes/01.JPG",
  },
  "image2": {
    "PATH": "./imagenes/02.JPG",
  },
  "image3": {
    "PATH": "./imagenes/03.JPG",
  }
}
}
*/

#ifdef GL_ES
precision mediump float;
#endif

const float pi = 3.14159265359;

uniform vec2 mouse;
uniform vec2 resolution;
uniform float time;

uniform sampler2D image1;
uniform sampler2D image2;
uniform sampler2D image3;



void main(){

vec4 color = vec4(0.2,0.1,0.6,1.0);
vec2 uv =  gl_FragCoord.xy / resolution ;
float delta = 4.0;

vec2 uvE = (gl_FragCoord.xy + vec2( delta, 0.0) ) / resolution;
vec2 uvO = (gl_FragCoord.xy + vec2(-delta, 0.0) ) / resolution;
vec2 uvN = (gl_FragCoord.xy + vec2( 0.0, delta) ) / resolution;
vec2 uvS = (gl_FragCoord.xy + vec2( 0.0,-delta) ) / resolution;

vec4 simple = texture2D(image2, uv);
vec4 simpleE = texture2D(image2, uvE);
vec4 simpleO = texture2D(image2, uvO);
vec4 simpleN = texture2D(image2, uvN);
vec4 simpleS = texture2D(image2, uvS);

float dx = length ( simpleE - simpleO) / ( 2.0 * delta ) ;
float dy = length ( simpleN - simpleS) / ( 2.0 * delta ) ;
float w = 0.25;
color = (1.0 - 4.0 * w) * simple + w * simpleO + w * simpleE + w * simpleN + w * simpleS ;

//color *=max(dx , dy);


vec2 imgSize = vec2(1920, 1283);
//uv = gl_FragCoord.xy / imgSize;





  gl_FragColor = color;
}
