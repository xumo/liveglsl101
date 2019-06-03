/*
{
"audio":true,
"camera":true
}
*/
precision mediump float;

uniform vec2 resolution;
uniform float time;
uniform sampler2D spectrum;
uniform sampler2D samples;
uniform float volume;
uniform sampler2D camera;

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

float edgevideo(sampler2D image1,  vec2 fragCoord, vec2 resolution, float delta){
  vec2 uv = fragCoord / resolution;
  vec2 uvE = ( fragCoord + vec2( delta, 0.0) ) / resolution;
  vec2 uvO = ( fragCoord + vec2(-delta, 0.0) ) / resolution;
  vec2 uvN = ( fragCoord + vec2( 0.0, delta) ) / resolution;
  vec2 uvS = ( fragCoord + vec2( 0.0, -delta) ) / resolution;
  vec4 img = texture2D(image1, uv);
  vec4 imgE = texture2D(image1, uvE);
  vec4 imgO = texture2D(image1, uvO);
  vec4 imgN = texture2D(image1, uvN);
  vec4 imgS = texture2D(image1, uvS);
  float dx = length(imgE - imgO) / (2.0 * delta);
  float dy = length(imgN - imgS) / (2.0 * delta);
  return dx +dy;
}

void main(){
  vec4 color =  vec4(0.0);
  vec2 uv = 2.0 * gl_FragCoord.xy/ resolution - 1.0;
  uv.x *= resolution.x / resolution.y;

  float a = atan( uv.x/ uv.y);
  float r =  sin(a + 0.6 * time);

  float uvx = ( pi /2.0 + 0.5*a*a ) / pi;
  float freq = texture2D(spectrum, vec2( uvx, 0.5)).r;
  vec4 cam = texture2D(camera, gl_FragCoord.xy/ resolution );
  float ampAng = texture2D(samples,  vec2( uvx, 0.5)).r;
  float cf = circuloSmooth(uv, vec2(0.0), 0.2+0.5 * volume, 0.0005+ 0.1 * ampAng);
  uv = gl_FragCoord.xy / resolution.xy;
  float f = texture2D(spectrum, vec2(uv.x, .5)).r;
  float wave = texture2D(samples, vec2(uv.x, .5)).r;
  float ec = edgevideo(camera,gl_FragCoord.xy, resolution, 1.0 + 2.0 * f );





  //color = cam;

  color += ec + cf ;
  //color.r *=f;
  //color.r += 1. - step(0.01, abs(wave - uv.y));
  //color.g += 1. - step(0.01, abs(f - uv.y));


  gl_FragColor = color;
 }
