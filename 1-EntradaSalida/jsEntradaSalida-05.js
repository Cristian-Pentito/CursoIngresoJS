/*
Pentito Cristian Roberto DIV Z
Ejercicio E/S 05

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	//txtIdNombre
	//txtIdEdad
	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;

	alert("Usted se llama" + " " + nombreIngresado + " " + "y tiene" + " " + edadIngresada + " " + "años");

}

