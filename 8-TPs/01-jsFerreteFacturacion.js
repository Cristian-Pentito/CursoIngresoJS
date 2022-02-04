/*
Pentito Cristian Roberto DIV Z
TP Nro1: E/S 10
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var mensaje;


	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);

	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	suma = precio1 + precio2 + precio3;
	mensaje = "El resultado es: " + suma;

	alert(mensaje);
}

function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;
	var suma;
	var mensaje;
	
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);

	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	suma = precio1 + precio2 + precio3;
	promedio = suma / 3;
	mensaje = "El resultado es: " + promedio;

	alert(mensaje);
}

function PrecioFinal () 
{
	
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var precioFinal;
	var iva;
	var mensaje;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseInt(precio2);

	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseInt(precio3);

	iva = 21 / 100; 
	suma = precio1 + precio2 + precio3;
	precioFinal = suma + (suma*iva);
	mensaje = "El precio final es: $" + precioFinal;

	alert(mensaje);

}