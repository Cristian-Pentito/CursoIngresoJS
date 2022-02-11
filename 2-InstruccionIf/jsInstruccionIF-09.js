/* Pentito Cristian Roberto DIV Z
Ej. IF N°9
Al presionar el Botón, mostrar un número Random 
del 1 al 10 inclusive */

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;	
	var maximo;
	var minimo;

	maximo = 10;
	minimo = 1;

	numeroRandom = Math.floor(Math.random() * (maximo + 1 - minimo)) + minimo;
	//numeroRandom = Math.floor(Math.random()*11);

	alert (numeroRandom);
}//FIN DE LA FUNCIÓN

// Math.floor(Math.random() * 11);