/*
    Calcular el perimetro y el area de un circulo de radio dado
            perimetro=2 * pi * radio
            area=pi * radio ** 2;
            
    Las salidas mostrarlas con 
    alert
    innerHTML
 */

// declarar
let radio = 0;
let area = 0;
let perimetro = 0;

// constantes que apunten al DOM

const nodoRadio = document.querySelector("#idRadio");
const nodoPerimetro = document.querySelector("#idPerimetro");
const nodoArea = document.querySelector("#idArea");


// introducir
radio = parseInt(prompt("Introduce el radio de la circunferencia"));


// procesar
perimetro = 2 * Math.PI * radio;
area = Math.PI * radio ** 2;

// mostrar
alert("El perimetro es " + perimetro + " y el area es " + area);

// template strings
// alert(`El perimetro es ${perimetro} y el area es ${area}`);

// innerHTML

nodoRadio.innerHTML = radio;
nodoPerimetro.innerHTML = perimetro;
nodoArea.innerHTML = area;
