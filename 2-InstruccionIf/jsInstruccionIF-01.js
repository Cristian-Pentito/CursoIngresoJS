/* 
Pentito Cristian Roberto DIV Z
Ej. IF N°1 
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".*/

function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad == 15)

	{
		alert("niña bonita");
	}

		
	alert("termino el programa");

}//FIN DE LA FUNCIÓN