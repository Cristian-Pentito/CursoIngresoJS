/*
Pentito Cristian Roberto DIV Z
Ej. IF N°2 
Al ingresar una edad debemos informar solo si la persona es mayor de edad */

function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad >= 18)
		
	{
		alert("es mayor de edad");
	}

		
	alert("termino el programa");
	
	

}//FIN DE LA FUNCIÓN