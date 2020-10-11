precision mediump float;

uniform vec2 resolution;

float circulo(vec2 st, vec2 centro, float radio ){
    float d = length(st - centro);
    float g = 0.01;
    return step(radio-g,  d) -  step(radio +g,  d);
}

float circuloSmooth(vec2 st, vec2 centro, float radio ){
    float d = length(st - centro);
    float g = 0.03;
    return smoothstep(radio - g , radio - g + 0.01 , d) -  smoothstep(radio +g ,radio +g + 0.01,   d);
}

void main(){
  vec4 color = vec4(1.0,1.0,1.0, 1.0);
  vec2 uv =  2.0 * gl_FragCoord.xy / resolution - 1.0;
  uv.x *=  resolution.x / resolution.y;
  vec2 uv2 = mod( vec2(2.0,2.0) * uv, 1.0);
  vec2 centro = vec2(0.5,0.5);
  float c = circuloSmooth(uv2, centro, 0.45);

  color *= c;

    vec4 color2 = vec4(0.0,0.5,0.1,1.0);
    color2.b = sin(uv.x);
    float c2= circuloSmooth(uv, vec2(0.0,0.0), 0.8);
    color2 *= c2;

    vec4 color3 = color * color2;
    color -= color3;
    color +=color2- color3;

  gl_FragColor = color;
 }
