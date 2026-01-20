/**
 * Pedir por teclado (prompt) el valor de los dos catetos de un triángulo rectángulo.
 * Calcular la hipotenusa usando la fórmula: 
 * h = raíz cuadrada(c1² + c2²)
 *  Mostrar el resultado 
 * - en el span con id "resultado" 
 * - mediante un alert.
 */

// declarar
let cateto1 = 0;
let cateto2 = 0;
let hipotenusa = 0.0;


// constantes que apunten al DOM
const nodoHipotenusa = document.querySelector("#idHipotenusa");
const nodoLienzo = document.querySelector("#lienzo");
const lienzo = nodoLienzo.getContext("2d");



// introducir
cateto1 = Number(prompt("Introduce el cateto 1:"));
cateto2 = Number(prompt("Introduce el cateto 2:"));


// procesar
hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);

// mostrar
nodoHipotenusa.innerHTML = hipotenusa;

// dibujar en el canva

// dibujar un triangulo
lienzo.beginPath();
lienzo.moveTo(75, 50);

lienzo.lineTo(100, 75);
lienzo.lineTo(100, 25);
lienzo.fill();





