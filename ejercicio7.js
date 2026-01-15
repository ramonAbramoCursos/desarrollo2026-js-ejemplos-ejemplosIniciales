/*
Pido un numero por teclado y quiero elevar el numero al cuadrado y escribir el resultado en el div
*/

// declarar
const POTENCIA = 2;
let numero = 0;
let resultado = 0;

// constantes que apuntan al DOM
const caja = document.querySelector("div");

// introducir
numero = Number(prompt("Introduce un numero"));

// procesar

resultado = numero ** POTENCIA;

// mostrar
caja.innerHTML = resultado;

