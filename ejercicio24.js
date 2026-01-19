/**
 * ENUNCIADO:
 * Pedir por teclado el nombre de un usuario y su profesión.
 * Construir una frase de bienvenida que diga: 
 * "Hola [nombre], qué bien que trabajas de [profesion]" y almacenarla en una variable.
 * Mostrar el resultado en el párrafo con id "mensajeSalida".
**/
/** 
 * CONCEPTO NUEVO: Template Strings (Plantillas de cadena)
 * Se utilizan las comillas invertidas `` en lugar de "" o ''.
 * Permite insertar variables directamente con la sintaxis ${variable}.
 * Ejemplo:
 * edad = 20;
 * console.log(`Tengo ${edad} años`); // Muestra: Tengo 20 años
 */


// declarar
let nombre = '',
    profesion = '',
    resultado = '';

// constantes al DOM
const nodoSalida = document.querySelector("#mensajeSalida");

// introducir

// pedir el nombre

// pedir la profesion

// procesamiento
// TODO: Crea el mensaje usando Template Strings
resultado = `Hola ${nombre}, me alegra saber que eres ${profesion}.`;

// salidas

// mostrar el resultado en el nodoSalida
nodoSalida.innerHTML = resultado;