precision mediump float;

uniform vec2 resolution;

float circulo(vec2 st, vec2 centro, float radio ){
    float d = length(st - centro);
    float g = 0.01;
    return step(radio  -g,  d) -  step(radio +g,  d);
}

void main(){
  vec4 color = vec4(1.0,0.5,0.5, 0.0);
  vec2 pos =  2.0 * gl_FragCoord.xy / resolution - 1.0;
  pos.x *=  resolution.x / resolution.y;
  vec2 centro = vec2(0.0,0.0);
  float c = circulo(pos, centro, 0.5);
  color *= c;
  color.b = step(0.75, pos.x);
  color.a = 0.0;
  gl_FragColor = color;
 }
