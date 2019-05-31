#ifdef GL_ES
precision mediump float;
#endif

const float pi = 3.14159265359;

uniform vec2 mouse;
uniform vec2 resolution;
uniform float time;

uniform sampler2D u_tex0;
uniform vec2 u_tex0Resolution;

varying vec4 v_position;
varying vec4 v_color;
varying vec3 v_normal;
varying vec2 v_texcoord;

//pintar un círculo centrado en c con radio r
float circle(vec2 st, vec2 c, float r){
    //tomar la distancia a c
    float d = length( c - st);
    //la fincionci+on step toma el valor d y si es mayor que r es 1  y d elo contrario es cero
    float s = step(d, r);
    //la función smoothstep es milimar a step pero el corte es gradual
    float sm = smoothstep(d, d + 0.01,r);
    return sm;
}

float rect(vec2 st, vec2 c, float ax, float ay){
    float dx = c.x - st.x;
    bool bx = ax > dx && -dx < ax ;

    float dy = c.y - st.y;
    bool by = ay > dy && -dy < ay ;
    return bx && by ? 1.0 : 0.0;
}
//rotar el vector v a radianes
vec2 rotate(vec2 v, float a){
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

void main (void) {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float aspect = u_resolution.x/u_resolution.y;
    st.x *= aspect;

    vec3 color = vec3(0.0, 1.0, 0.0);
    vec2 center = vec2( aspect * 0.5, 0.5);
    float c = circle(st,center, 0.5);
    color.r = c;
    float a = u_time * pi;
    //rotar coordenadas del espacio
    //st = rotate(st, a);
    //rotar el centro del círculo
    center = rotate(center, a);
    //dibujamos ahora en coordenadas ya rotadas
    //Al multiplicar la información espacial podemos expader o contraer nuestro lienzo
  //  st *= vec2(2.0);
   // st = fract(st);
    st = rotate(st, a);
   float s  = rect(st, center, 0.5, 0.1) ;
    color.b = 1.0 - s;

	gl_FragColor = vec4(color,1.0);
}
