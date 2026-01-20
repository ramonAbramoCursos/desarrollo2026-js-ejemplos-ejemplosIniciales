/*
* Pedir dos numeros por teclado
* Calcular las operaciones suma, resta, multiplicacion y division

* Mostrar :
* En los dos li de la primera lista colocar
    * numero1
    * numero2

* En los 4 li de la segunda lista colocar
    * suma
    * resta
    * multiplicacion
    * division
*/

// declarar
let numero1 = 0,
    numero2 = 0,
    suma = 0,
    resta = 0,
    multiplicacion = 0,
    division = 0;



// constantes que apunten al DOM
const nodoNumero1 = document.querySelector("#idNumero1");
const nodoNumero2 = document.querySelector("#idNumero2");
const nodoSuma = document.querySelector("#idSuma");
const nodoResta = document.querySelector("#idResta");
const nodoMultiplicacion = document.querySelector("#idMultiplicacion");
const nodoDivision = document.querySelector("#idDivision");

// introducir
numero1 = parseInt(prompt("Introduce el primer numero"));
numero2 = parseInt(prompt("Introduce el segundo numero"));

// procesar

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;

// mostrar
nodoNumero1.innerHTML = 'Numero1: ' + numero1;
nodoNumero2.innerHTML = ' Numero2: ' + numero2;
nodoSuma.innerHTML = 'Suma: ' + suma;
nodoResta.innerHTML = ' Resta: ' + resta;
nodoMultiplicacion.innerHTML = ' Multiplicacion: ' + multiplicacion;
nodoDivision.innerHTML = 'Division: ' + division;
