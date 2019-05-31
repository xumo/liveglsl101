
precision mediump float;
/**********************************

gl_FragCoord tiene la información de posición de nuestro pixel. En modelado 3d se refieren muchbas a veces a coordenadas uv. HA programas que pueden tener las coordenadas de texturas normalizadas. por lo que siempre hay que revisar el formato en que se encuentran.

El orgigen se encuentra en la esquina inferior izquierda.

    y
    +
    ^
    |
    |
    |
(0,0)------>+x

**********************************/



void main (void) {

	vec2 st = gl_FragCoord.xy;

    vec4 color = vec4(0.0, 0.0 , 0.0,1.0);

    float x = 160.0;
    float y = 120.0;
    vec2 p = vec2(x,y);

    if(st.x> x)
        color.r = 1.0;
    else
        color.b = 1.0;

    float c = length(p - st);

    if(c < 120.0)
        color.g = 1.0;

    /*float ho = 0.5 - 0.5 * sin(0.1 * st.x);
    color.r = ho;
    float ve = 0.5 - 0.5 * sin(0.1 * st.y);
    color.r *= ve;
    color.b = 1.0 - ve;
    color.g = 1.0 - ho;
    */
	gl_FragColor = color;
}
