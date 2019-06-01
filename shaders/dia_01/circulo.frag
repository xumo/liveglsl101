precision mediump float;

uniform vec2 resolution;

void main(){
  vec4 color = vec4(0.5,0.5,0.5, 1.0);
  vec2 pos =  2.0 * gl_FragCoord.xy / resolution - 1.0;
  pos.x *=  resolution.x / resolution.y;
  vec2 centro = vec2(0.8,0.0);
  float c = 1.0 - length(centro - pos);
  c = step( 0.5, c);
  color *= c;
  gl_FragColor = color;
 }
