
/*
*  
*   
*
*/

uniform vec2 u_resolution;

/*
*
* Para dibujar en 2D es mejor tener coordenadas normalizadas, es decir x yentre 0 y 1, o a veces de -1 a 1.
*
*/


void main (void) {

    vec4 color = vec4(0.0, 1.0 , 1.0,1.0);
    
	gl_FragColor = color;
}
