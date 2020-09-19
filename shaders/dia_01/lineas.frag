#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

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


float linesV(vec2 st, float n , float w){
    vec2 nt = fract(st *  n );
    float v = smoothstep( 0.5 - w, 0.5 , nt.x) - smoothstep(0.5, 0.5 + w, nt.x);
    return v;
}

float linesH(vec2 st, float n , float w){
    vec2 nt = fract(st *  n );
    float v = smoothstep( 0.5 - w, 0.5 , nt.y) - smoothstep(0.5, 0.5 + w, nt.y);
    return v;
}

void main (void) {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float aspect = u_resolution.x/u_resolution.y;
    st.x *= aspect;

    vec4 color = vec4(0.0, 1.0, 0.0, 1.0);
    vec2 center = vec2( aspect * 0.5, 0.5);
    float c = circle(st,center, 0.5);
    color.r = c; 
    float s  = rect(st, center, 0.5, 0.5) ;
    color.b = 1.0 - s;
    //color -= linesV(st, 20.0 , 0.5 * sin(u_time) * sin(u_time)) ;
    color.rgba = vec4(linesV(st, 20.0 , 0.08)) ;
    color.rgba += vec4(linesH(st, 20.0 , 0.08)) ;

	gl_FragColor = vec4(color);
}
