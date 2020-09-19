precision mediump float;

uniform vec2 resolution;

void main(){
  vec4 color = vec4(0.5,0.5,0.5, 1.0);
  color.gr = vec2(0.0,1.0);
  vec2 pos = gl_FragCoord.xy / resolution;


  color.r = pos.x;
  color.g = pos.y;

  if(pos.x > 0.5){
    color *= 0.0;
  }

color.rgb = vec3(1.0,1.0,1.0);

vec2 centro = vec2(0.5,0.5);
float c = 1.0 - length(centro - pos);
c = step( 0.5, c);
color *= c;

  gl_FragColor = color;
 }
