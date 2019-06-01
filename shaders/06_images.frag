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



void main(){

vec4 color = vec4(0.2,0.1,0.6,1.0);
vec2 uv =  gl_FragCoord.xy / resolution ;
float delta = 1.0;
vec2 uvE = (gl_FragCoord.xy + vec2( delta, 0.0) ) / resolution;
vec2 uvO = (gl_FragCoord.xy + vec2(-delta, 0.0) ) / resolution;
vec2 uvN = (gl_FragCoord.xy + vec2( 0.0, delta) ) / resolution;
vec2 uvS = (gl_FragCoord.xy + vec2( 0.0,-delta) ) / resolution;

vec4 simple = texture2D(image1, uv);
vec4 simpleE = texture2D(image1, uvE);
vec4 simpleO = texture2D(image1, uvO);
vec4 simpleN = texture2D(image1, uvN);
vec4 simpleS = texture2D(image1, uvS);

float dx = length ( simpleE - simpleO) / ( 2.0 * delta ) ;
float dy = length ( simpleN - simpleS) / ( 2.0 * delta ) ;

color *=max(dx , dy);
vec2 imgSize = vec2(1920, 1283);
//uv = gl_FragCoord.xy / imgSize;

uv = 2.0 * gl_FragCoord.xy / resolution - 1.0;
uv.x *= resolution.x / resolution.y;
uv.x /= 1920.0 / (1.0 * 1283.0);
uv = 0.8 * uv + vec2(0.5);
vec4 img = texture2D(image1,  uv );

//color = uv.x > 0.0 &&  uv.x < 1.0 && uv.y >0.0 && uv.y< 1.0 ? img : simple;




  gl_FragColor = color;
}
