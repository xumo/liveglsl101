#version número_de_version
precision mediump float;
in tipo in_nombre_de_variable_1;
in tipo in_nombre_de_variable_2;

out tipo out_nombre_variable;

uniform tipo uniform_nombre;

/*
Escalares
--------
bool: tipo condiciional, true o false.
int: entero de 32 bits (con signo +-)
uint:  unsigned 32-bit (solo positivo)
float:  número racional o de punto flotante de precisión simple.
double: número racional o de punto flotante de precisión doble.

Vectoriales
------------
bvecn: vector de boolanos
ivecn: vector de enteros con signo
uvecn: vector de enteros positivos
vecn: vector de float
dvecn: vector doubles
*/

void main()
{
  //Procesar los datos de input

  // Exribir en la salida losdatos tipo out
  out_variable_name = resultado_del_proceso;
}
