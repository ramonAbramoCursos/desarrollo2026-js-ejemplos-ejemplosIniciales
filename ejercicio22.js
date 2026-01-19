/**
 * Pedir por teclado un nombre o una frase.
 * Calcular cuántos caracteres tiene (incluyendo espacios).
 * CONCEPTO NUEVO: propiedad .length del objeto String
 * Ejemplo: 
 * valor="Hola"
 * valor.length devuelve 4.
 * Mostrar el nombre y su longitud en el HTML.
 */

// declarar
let textoUsuario = '',
    cantidad = 0;

// constantes que apunten al DOM
const nodoNombre = document.queryselector("#idnombreOut");
const nodoLongitud = document.querySelector("#idlongitudOut");

// introducir
textoUsuario = Number(prompt("Escribe tu nombre completo:"));

// procesar
// Usamos la propiedad .length para contar
cantidad = textoUsuario.length;

// mostrar
nodoNombre.innerHTML = textoUsuario;
nodoLongitud.innerHTML = cantidad;