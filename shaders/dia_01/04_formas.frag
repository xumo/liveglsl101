#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 mouse;
uniform vec2 resolution;
uniform float time;

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


void main (void) {
	vec2 st = gl_FragCoord.xy/resolution.xy;
    float aspect = resolution.x/resolution.y;
    st.x *= aspect;

    vec3 color = vec3(0.0, 0.2, 0.0);
    vec2 center = vec2( aspect * 0.5, 0.5);
    float c = circle(st,center, 0.5);
    color.r = c;
    float s  = rect(st, center, 0.5, 0.5) ;
      color.b = 1.0 - s;

	gl_FragColor = vec4(color,1.0);
}
