/* Pentito Cristian Roberto DIV Z
Ej. IF N°7

Al ingresar una edad menor a 18 años y un estado 
civil distinto a "Soltero", mostrar el siguiente 
mensaje: 'Es muy pequeño para NO ser soltero.' */

function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;

	if(estadoCivil != "Soltero" && edad < 18)
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}	