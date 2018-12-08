//Comentario en una linea

/*
Comentario en múlti línea
*/


//Todo programa tiene una función main, y  como en  C/C++ define el punto de entrada.
void main (void) {

    /* vec4 es una variable tipo vector de 4 dimensiones o entradas.
Los colores tienen cuantro componentes: Rojo, Verde, Azul y Alpha o Transparencia.
    Los vectores contienen elementos de tipo float, y debe escribirse no punto decimal, de otra forma es tomado como entero o int y el programa arrojará un error. Actualmente mucho compiladores de shaders ya convierten autmáticamente de inta float, pero para mantener la compatibilidad es mejor utilizar el punto.    
    */
    
    //declaramos color inicializándolo como verde.
    vec4 color = vec4(0.0, 1.0 , 1.0,1.0);

    //Swizzling
    /*
    A los vectores se les puede asignar cada elemento individualmente o en grupo, y de la misma forma se pueden obtener sus valores.
    El orden es xyzw, rgba, stuv. Son diferentes tipos denombres para que sea más legible cuadno se trate de vecrotres de posición, de color o de coordenadas de textura.
*/
    
    //Queremos el vector de color sin información de transparencia
    vec3 colorVerde =  color.rgb;
    //Ahora obetenemos de él el valor del canal verde,
    float canalVerde = colorVerde.y;//y es el segundo término del vector, equivalente a g.
    // se puede repetir
    vec3 soloVerde = color.ggg;    
    vec2 rojoAzul = color.rb;
    //crear a partir de otros vectores
    vec3 comp = vec3(rojoAzul, 0.0);
    

    /* gl_FragColor
        
        Al final de cuentas este simple programa pinta un sólo pixel en pantalla, que es equivalente a asignarle un color. Todos los fragment shaders deben asignar un valor vec4 a gl_FragColor.
        
    */    
    color.a = 0.95;
	gl_FragColor = color;
}
