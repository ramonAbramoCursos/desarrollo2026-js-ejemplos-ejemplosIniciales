/**
 * Pedir una ciudad por teclado.
 * Transformar el texto a todo mayúsculas y a todo minúsculas.
 * CONCEPTO NUEVO: 
 * valor="Ejemplo de clase"
 * valor.toUpperCase()  -> "EJEMPLO DE CLASE"
 * valor.toLowerCase() -> "ejemplo de clase"
 * Mostrar ambos resultados.
 */

// declarar
let ciudad = '',
    ciudadMayusculas = '',
    ciudadMinusculas = '';

// constantes que apunten al DOM
const nodoGrito = document.querySelector("#grito");
const nodoSusurro = document.querySelector("#susurro");

// introducir
ciudad1 = prompt("¿En qué ciudad vives?");

// procesar
ciudadMayus = ciudad.toUpperCase();
ciudadMinus = ciudad.toLowerCase();

// mostrar
nodoGrito.innerHTML = ciudadMayusculas;
nodoSusurro.innerHTML = ciudadMinusculas;