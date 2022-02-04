/*
Pentito Cristian Roberto DIV Z
TP Nro3:
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaCentigrados;
	var temperaturaFarenheit;
	var mensaje;
	

	temperaturaFarenheit = document.getElementById('txtIdTemperatura').value;
	temperaturaFarenheit = parseFloat(temperaturaFarenheit);
	
	temperaturaCentigrados = (temperaturaFarenheit - 32) * 5 / 9;
	mensaje = temperaturaFarenheit + " grados Farenheit son " + temperaturaCentigrados + " grados Centigrados";

	alert(mensaje);

}

function CentigradosFahrenheit () 
{
	var temperaturaCentigrados;
	var temperaturaFarenheit;
	var mensaje;
	

	temperaturaCentigrados = document.getElementById('txtIdTemperatura').value;
	temperaturaCentigrados = parseFloat(temperaturaCentigrados);
	
	temperaturaFarenheit = (temperaturaCentigrados * 9 / 5) + 32 ;
	mensaje = temperaturaCentigrados + " grados Centigrados son " + temperaturaFarenheit + " grados Farenheit";

	alert(mensaje);

}
