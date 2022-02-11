/*
Pentito Cristian Roberto DIV Z
Ej. IF N°3
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

// con doble IF
/*
function mostrar()
{ 
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad >= 18)
		
	{
		alert("es mayor de edad");
	}

	if(edad < 18)	
	{
		alert("es menor de edad");
	}
	
alert("fin del programa");

*/

// con ELSE

function mostrar()
{ 
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad >= 18)   //conviene poner >17
		
	{
		alert("es mayor de edad");
	}

	else

	{
		alert("es menor de edad");
	}
	
alert("fin del programa");





}

{
/*
function mostrar()

//con un solo IF declarando otra variable para optimizar codigo

var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	menjaje = "es menor de edad"

	if(edad > 17)   //conviene poner >17
		
	{
		alert("es mayor de edad");
	}

	
	
	

}//FIN DE LA FUNCIÓN