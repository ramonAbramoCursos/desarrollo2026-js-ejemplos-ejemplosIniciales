/**
 * Pedir por teclado (prompt)
 * - precio unitario
 * - cantidad
 * 
 * Calcular el precio total del producto
 * preciototal=preciounitario*cantidad
 * 
 * Mostrar el precio total con un 
 * alert
 * innerHTML
 */

// declarar
let precioTotal = 0;
let precioUnitario = 0;
let cantidad = 0;

// constantes que apunten al DOM
const nodoPrecioTotal = document.querySelector("#idPrecioTotal");
const nodoPrecioUnitario = document.querySelector("#idPrecioUnitario");
const nodoCantidad = document.querySelector("#idCantidad");

// introducir
cantidad = Number(prompt("Introduce la cantidad"));
precioUnitario = Number(prompt("Introduce el precio unitario"));


// procesar
precioTotal = cantidad * precioUnitario;


// mostrar

// alert

alert("El precio total es " + precioTotal + " el numero de unidades es " + cantidad + " y el precio unitario es " + precioUnitario);

// template strings

// alert(`El precio total es ${precioTotal} el numero de unidades es ${cantidad} y el precio unitario es ${precioUnitario}`);

// innerHTML
nodoCantidad.innerHTML = cantidad;
nodoPrecioUnitario.innerHTML = precioUnitario;
nodoPrecioTotal.innerHTML = precioTotal;
