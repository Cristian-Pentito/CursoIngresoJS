/* Pentito Cristian Roberto DIV Z
Ej. IF N°5
Al ingresar una edad solo debemos informar si 
la persona NO es adolescente.  */

	function mostrar()
{ 
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad < 13 || edad > 17)  
		
	{
		alert("No es adolescente");
	}

	


}//FIN DE LA FUNCIÓN

/*
Otra forma de hacer el numero 5

// if(!(edad > 12 && edad < 18)) lo contrario a ser adolescente
{
	alert ("No es adolescente")
}

*/

