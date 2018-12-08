
/*
*  
*   
*
*/

uniform vec2 u_resolution;
uniform float uno;
/*
*
* Para dibujar en 2D es mejor tener coordenadas normalizadas, es decir x yentre 0 y 1, o a veces de -1 a 1.
*
*/


void main (void) {

	vec2 st = gl_FragCoord.xy;
	//vec2 st = gl_FragCoord.xy/u_resolution.xy;
    //float aspect = u_resolution.x/u_resolution.y;
    //st.x *= aspect;
    st *= vec2(3.0, 3.0);    
 
    vec4 color = vec4(0.0, 0.0 , 0.0,1.0);

    float ho = 0.5 - 0.5 * sin(0.1 * st.x);
    color.r = ho;
    float ve = 0.5 - 0.5 * sin(0.1 * st.y);
    color.r *= ve;
    color.b = 1.0 - ve;
    color.g = 1.0 - ho;
    /*
    if(st.x > 0.5)
        color.r = 1.0;
    if(st.y > 0.5)
        color.g = 1.0; 
    if(st.x < 0.5 && st.y < 0.5)
        color.b = 1.0;
    if(st.x > 1.0)
        color.rb *= 0.5;
    */

	gl_FragColor = color;
}
