/*
Pedir por teclado (prompt) el nombre y los apellidos de una persona y mostrarlos en pantalla utilizando alert y escribirlos en la lista de la pagina
*/

// declarar e inicializar
let nombre = '';
let apellidos = '';

// constantes al DOM
const spanNombre = document.querySelector("#nombre");
const spanApellidos = document.querySelector("#apellidos");

// entradas

nombre = prompt("Introduce tu nombre");
apellidos = prompt("introduce tus apellidos");

// procesamiento

// salidas

alert("Tus datos son " + nombre + " " + apellidos);

spanNombre.innerHTML = nombre;
spanApellidos.innerHTML = apellidos;

