/*
 * Pedir por teclado el radio de una circunferencia y calculamos
 * el area de la circunferencia de radio dado
 *
 * area=Math.PI * radio**2
 * area=Math.PI * Math.pow(radio,2)
 *
 * Escribir en la pagina el area calculada y el radio introducido
 */

// declarar e inicializar
let area = 0;
let radio = 0;

// constantes que apunten al DOM
const spanRadio = document.querySelector("#idRadio");
const spanArea = document.querySelector("#idArea");

// introducir
radio = Number(prompt("Introduce el radio de la circunferencia"));


// procesamiento
area = Math.PI * radio ** 2;

// salidas
spanArea.innerHTML = area;
spanRadio.innerHTML = radio;