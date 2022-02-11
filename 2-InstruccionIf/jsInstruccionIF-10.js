/* Pentito Cristian Roberto DIV Z
Ej. IF N°10
Al presionar el Botón, asignar una nota RANDOM al 
examen y mostrar: "EXCELENTE" para notas igual a 9 o
 10, "APROBÓ" para notas mayores a 4,"Vamos, la 
 proxima se puede" para notas menores a 4.*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;	
	var maximo;
	var minimo;
	
	maximo = 10;
	minimo = 1;
	
	

	if (numeroRandom == 9 || numeroRandom == 10)
	{
		alert("EXCELENTE");
	}

	else
	{
		if (numeroRandom > 4 )
		{
			alert("APROBÓ");
		}
	
		else
		{
			alert("Vamos, la próxima se puede");
		}
	}
	
}//FIN DE LA FUNCIÓN

//otra forma de hacerlo:

/*
var nota;
var maximo;
var minimo;

maximo = 10;
minimo = 1;

numeroRandom = Math.floor(Math.random() * (maximo + 1 - minimo)) + minimo;

if(nota >8)
{
	alert("Exelente");
}
else
{
	if(nota>3)
	{
		alert("Aprobo");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}


//otra forma

var nota;
var maximo;
var minimo;
var mensaje;

maximo = 10;
minimo = 1;
mensaje = "Vamos, la proxima se puede";

nota = Math.floor(Math.random() * (maximo + 1 - minimo)) + minimo;

if(nota >8)
{
	mensaje = "EXELENTE";
}
else
{
	if(nota>3)
	{
		mensaje = "APROBO";
	}
	
	
	alert(mensaje + ":" + nota);
	
}