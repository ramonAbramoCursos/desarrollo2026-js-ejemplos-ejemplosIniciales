/*
Introducir un numero por teclado
ese numero es el lado de un cuadrado
Calcular el area y el perimetro
area=lado*lado;
perimetro=lado*4;
Colocar un mensaje en la consola
- despues de introducir el lado
- despues de calcular el area
- despues de calcular el perimetro

Mostrar los resultados y el lado introducido en la pagina (dentro de los span)
*/


// declarar
let lado = 0;
let area = 0;
let perimetro = 0;

// constantes que apunten al DOM
const spanLado = document.querySelector("#idLado");
const spanArea = document.querySelector("#idArea");
const spanPerimetro = document.querySelector("#idPerimetro");

// introducir
lado = parseInt(prompt("Introduce el lado del cuadrado"));

// procesar
area = lado ** 2;
perimetro = lado * 4;

// mostrar
spanLado.innerHTML = lado;
spanArea.innerHTML = area;
spanPerimetro.innerHTML = perimetro;
