/*
{
"audio":true
}
*/
precision mediump float;


uniform vec2 resolution;
uniform float time;
uniform sampler2D spectrum;
float pi = 3.1415926535897932384626433832795;
float circulo(vec2 st, vec2 centro, float radio ){
    float d = length(st - centro);
    float g = 0.01;
    return step(radio-g,  d) -  step(radio +g,  d);
}

float circuloSmooth(vec2 st, vec2 centro, float radio, float g ){
    float d = length(st - centro);
    return smoothstep(radio - g , radio - g + 0.01 , d) -  smoothstep(radio +g ,radio +g + 0.01,   d);
}

float atan22( float y,  float x)
{

    float s = abs(x) > abs(y) ? 1.0 : 0.0;
    return mix(pi/2.0 - atan(x,y), atan(y,x), s);
}

void main(){
  vec4 color =  vec4(0.0);
  vec2 uv = 2.0 * gl_FragCoord.xy/ resolution - 1.0;
  uv.x *= resolution.x / resolution.y;

  float a = atan( uv.x/ uv.y);
  float r =  sin(a + 0.6 * time);

  float uvx = ( pi /2.0 + 0.5*a*a ) / pi;
  float freq = texture2D(spectrum, vec2( uvx, 0.5)).r;

  float c = circuloSmooth(uv, vec2(0.0), 0.5, 0.01+0.5 * freq);
  color += c;

  gl_FragColor = color;
 }
