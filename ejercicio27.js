/**
 * ENUNCIADO:
 * Pedir un número decimal (puede ser negativo) por teclado.
 * Extraer la parte entera eliminando los decimales.
 * Extraer la parte decimal sin la parte entera.
  * Mostrar resultado en el span con id "idInfo".
**/
/** * CONCEPTO NUEVO: Math.trunc()
 * Math.trunc(x) -> Quita los decimales sin redondear (corta el número).
 * 
 * Ejemplo:
 * Math.trunc(3.14); // Devuelve 3
 */

// declarar
let numeroUsuario = 0,
    soloEntero = 0,
    soloDecimal = 0;

// constantes al DOM
const nodoInfo = document.querySelector("#idInfo");

// introducir
numeroUsuario = Number(prompt("Introduce un número con decimales:"));

// procesamiento





// salidas
