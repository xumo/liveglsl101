#ifdef GL_ES
precision mediump float;
#endif

/*
 Los shaders se ejecutan en la tarjeta gráfica, en caso de los fragment shaders se ejecutan una vez por cada pixel en la pantalla.
Es así que no tienen conocimiento de lo que ocuure en el CPU o programa principal. Para mandar información del CPU al GPU se utilizan variables uniform.
   Al conrtario, del GPU al CPU se ua normalmente escribir en una textura y leerla al final del proceso en el GPU.

*/

uniform vec2 resolution;

uniform float time;
uniform float uno ;

/*
*
* Para dibujar en 2D es mejor tener coordenadas normalizadas, es decir x yentre 0 y 1, o a veces de -1 a 1.
*
*/


void main (void) {


	vec2 st = gl_FragCoord.xy/resolution.xy;
    float aspect = resolution.x/resolution.y;
    st.x *= aspect;
    vec4 color = vec4(1.0,0.0,0.0,1.0);
   //mitades de pantalla
    if(st.x > 0.5)
        color.r = 1.0;
    if(st.y > 0.5)
        color.g = 1.0;
    if(st.x < 0.5 && st.y < 0.5)
        color.b = 1.0;
    if(st.x > 1.0)
        color.rb = vec2(0.0,1.0);

  //  color = vec4(0.0);
    float s = 4.0 - sin(time);
    vec2 center = st - vec2(0.5);
    float c = s *  length( center );
    color *=c;
    float x = st.x + 0.3 * time;
    float g = sin( x * 20.0  );
    color.g = uno;

	gl_FragColor = color;
}
