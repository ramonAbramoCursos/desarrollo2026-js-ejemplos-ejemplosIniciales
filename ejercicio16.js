/*
Cambiar el contenido de los dos div 
Colocar el contenido del primer div llamado "idUno" en el segundo div llamado "idDos" y el contenido del segundo div llamado "idDos" en el primer div llamado "idUno"

*/

// declarar
let uno = '';
let dos = '';


// constantes al DOM
const nodoUno = document.querySelector("#idUno");
const nodoDos = document.querySelector("#idDos");

// introducir
uno = nodoUno.innerHTML;
dos = nodoDos.innerHTML;

// procesamiento


// mostrar
nodoUno.innerHTML = dos;
nodoDos.innerHTML = uno;


