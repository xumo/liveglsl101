/*{
    "pixelRatio": 1,
    "vertexCount": 3000,
    "vertexMode": "POINTS",
}*/
precision mediump float;
attribute float vertexId;

uniform float vertexCount;
uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
varying vec4 v_color;

void main() {
  float t = time * .1;
  float i = vertexId * .2 + sin(vertexId) * 1.;
  float cols = 20.0;
  float dx = 1.0 / cols;
  float dy = 1.0 / cols;
  vec3 pos = vec3(
    mod(vertexId, cols)  * dx,
    vertexId / cols * dy,
    4.0*sin(vertexId)*sin(vertexId)
  );

  gl_Position = vec4(pos, 1);
  gl_PointSize = pos.z;

  v_color = vec4(1.0);
}
