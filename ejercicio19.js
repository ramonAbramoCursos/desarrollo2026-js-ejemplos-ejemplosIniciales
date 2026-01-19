/**
 * El programa debe simular el lanzamiento de un dado de 6 caras.
 * No se pide nada por teclado, pero se debe generar un número aleatorio entre 1 y 6.
 * * Usar Math.random() y Math.floor().
 * Mostrar el resultado en el div "dado".
 */

// declarar

// constantes que apunten al DOM
const cajaDado = document.querySelector("div");

// introducir
// (En este caso no hay prompt, el dato "entra" por el sistema de azar)


// procesar
numeroAleatorio = Math.floor(Math.random() * 6) + 1;

// mostrar
