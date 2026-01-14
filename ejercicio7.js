/*
Pido un numero por teclado y quiero elevar el numero al cuadrado y escribir el resultado en el div
*/

// declarar
const POTENCIA = 2;
let numero = 0;
let resultado = 0;

// introducir
numero = Number(prompt("Introduce un numero"));

// procesar

resultado = numero ** POTENCIA;

// mostrar
document.querySelector("div").innerHTML = resultado;