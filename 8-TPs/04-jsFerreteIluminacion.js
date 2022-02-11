/*4.Pentito Cristian Roberto DIV Z
TP Nro4:
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta 
al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo 
tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el
 descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz"
 o “FelipeLamparas” se hace un descuento del 25 % y si es de 
 otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz" 
 el descuento es del 15%, si es  “FelipeLamparas” se hace un 
 descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe 
sumar un 10% de ingresos brutos en informar del impuesto con el 
siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio () 
{
 var cantidad;
 var marca;
 var precioUnitario;
 var precioFinal;
 var precioSinDescuento;
 var precioConDescuento;
 var ingresosBrutos;
 var descuento;
 var impuesto;
 
 cantidad = document.getElementById('txtIdCantidad').value;
 cantidad = parseInt(cantidad);
 marca = document.getElementById('Marca').value;
 precioUnitario = 35;
 precioSinDescuento = precioUnitario * cantidad;
 ingresosBrutos = 0.1;


    //---------Punto A-----------

    if(cantidad > 5)         
    {
        descuento = 0.5;   
    }


    //---------Punto B-----------

    if(cantidad == 5)    
        {
            if(marca == "ArgentinaLuz")
                {
                     descuento = 0.4; 
                }
            else
                {
                    descuento = 0.3;
                }         
        }


    //----------Punto C-----------    

    if(cantidad == 4)    
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 0.25;
                }
            else
                {
                    descuento = 0.2;
                }     
        }       
    

    //----------Punto D -----------   

     if(cantidad ==3)     
        {
            if(marca == "ArgentinaLuz") 
                {
                    descuento = 0.15;
                }
            else
                {
                    if(marca =="FelipeLamparas")
                        {
                            descuento = 0.1;
                        } 
                    else
                    {
                        descuento = 0.05;
                    }      
                }  
        }                               


precioConDescuento = precioSinDescuento - (precioSinDescuento*descuento);
precioFinal = precioConDescuento;
impuesto = precioConDescuento * ingresosBrutos;


    //-----------Punto E------------

         if(precioConDescuento > 120)   
        {    
            precioFinal = precioConDescuento + impuesto;
            alert("Usted pago " + impuesto + " de IIBB.");
        }


document.getElementById('txtIdprecioDescuento').value = precioFinal;
   
}

