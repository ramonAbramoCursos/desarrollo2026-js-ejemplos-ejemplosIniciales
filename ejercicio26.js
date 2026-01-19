/**
 * ENUNCIADO:
 * Tenemos una frase predefinida: "Aprendiendo JavaScript en Alpe".
 * Pedir al usuario una palabra para comprobar si está en la frase.
 * Si la palabra existe, repetirla 3 veces en el HTML.
**/
/** * CONCEPTO NUEVO: .includes() y .repeat()
 * .includes("texto") -> Devuelve true si el texto existe en la cadena, false si no.
 * .repeat(n) -> Devuelve la cadena repetida el número de veces indicado.
 * Ejemplo:
 * frase = "Aprendiendo JavaScript en Alpe";
 * frase.includes("JavaScript"); // Devuelve true
 * frase.repeat(3); // Devuelve "Aprendiendo JavaScript en AlpeAprendiendo JavaScript en AlpeAprendiendo JavaScript en Alpe"
 */

// declarar
let fraseOriginal = "Aprendiendo JavaScript en Alpe",
    busqueda = "",
    existe = false,
    eco = "";

// constantes al DOM
const nodoRespuesta = document.queryselector("#respuesta");

// introducir
busqueda = prompt("¿Qué quieres buscar?");

// procesamiento

existe = fraseOriginal.Include(busqueda);
eco = busqueda.repeat(veces);

// salidas
nodoRespuesta.innerHTML = `¿Existe la palabra?: ${existe}. Repetición: ${eco}`;