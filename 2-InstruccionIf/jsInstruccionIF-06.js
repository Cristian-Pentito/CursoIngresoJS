/* Pentito Cristian Roberto DIV Z
Ej. IF N°6
 Al ingresar una edad debemos informar si la persona 
 es mayor de edad (mas de 18 años) o adolescente 
 (entre 13 y 17 años) o niño (menor a 13 años). */

	function mostrar()
{ 
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad > 18)  
		
	{
		alert("Es mayor de edad");
	}

	else 
	
	{
		if(edad > 12 && edad < 18)
		
		{
			alert("Es adolescente");
		}
	
		else
		
		{
			alert("Es menor de edad")
		}

	} 	

}//FIN DE LA FUNCIÓN



/*
	if (edad > 17)
	{
		alert("Es un adulto");
	}

	else //si no es adulto

	{
		if(edad<13)  si es niño

		{
			alert("Es un niño");
		}
		
		else //si no es niño ni adulto

		{
			alert("Es un adolescente")
		}
	}



 otra forma

 var = mensaje;

 mensaje = "soy un adolescente";

	if (edad > 17)  // si es adulto
	{
		mensaje = "soy un adulto";
	}


	else
	{
		if(edad<13)  //si es niño

		{
			mensaje = "soy un niño";
		}	
	}

	
alert(mensaje);

*/	
