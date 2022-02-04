/*
Pentito Cristian Roberto DIV Z
TP Nro2:
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var hilosAlambre;
	var mensaje;
	var alambre;

	largo = document.getElementById("txtIdLargo").value;
	largo = parseInt(largo);

	ancho = document.getElementById("txtIdAncho").value;
	ancho = parseInt(ancho);

	perimetro = (largo + ancho)*2;
	hilosAlambre = 3;
	alambre = perimetro * hilosAlambre;

	mensaje = "La cantidad de alambre es de: " + alambre;

	alert(mensaje);

}

function Circulo () 
{
var perimetroCircular;
var hilosAlambre;
var cantidadAlambre;
var radio;
var mensaje;

radio = document.getElementById('txtIdRadio').value;
radio = parseFloat(radio);

hilosAlambre = 3;
perimetroCircular = 2 * Math.PI * radio;
cantidadAlambre = perimetroCircular * hilosAlambre;

mensaje = "La cantidad necesaria de alambre es " + cantidadAlambre;

alert(mensaje);
}

function Materiales () 
{
	var largo;
	var ancho;
	var superficie;
	var mensaje;
	var cemento;
	var cal;
	var cantBolsaCemento;
	var cantBolsaCal;

	largo = document.getElementById("txtIdLargo").value;
	largo = parseInt(largo);

	ancho = document.getElementById("txtIdAncho").value;
	ancho = parseInt(ancho);

	superficie = largo * ancho;
	cemento = 2;
	cal = 3;
	cantBolsaCemento = cemento * superficie;
	cantBolsaCal = cal * superficie;
	mensaje = "La cantidad de bolsas de cemento es de "+ cantBolsaCemento + " y la cantidad de bolsas de cal es de "+ cantBolsaCal;

	alert(mensaje);

}