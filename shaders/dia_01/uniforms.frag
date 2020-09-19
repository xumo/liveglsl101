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



void main (void) {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float aspect = u_resolution.x/u_resolution.y;
    st.x *= aspect;

    vec3 color = vec3(0.0, 1.0, 0.0);
    
	gl_FragColor = vec4(color,1.0);
}
