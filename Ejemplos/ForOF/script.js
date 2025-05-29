// Ejemplos de "For Of"🚀

const miObjeto = { a: 1, b: 2 };

// Itera sobre las claves
for (const key of Object.keys(miObjeto)) {
  console.log(key); //a, b
}

// Itera sobre los valores
for (const value of Object.values(miObjeto)) {
  console.log(value); // 1,2
}

// Itera sobre claves y valores (pares [key, value])
for (const [key, value] of Object.entries(miObjeto)) {
  console.log(`${key}: ${value}`); // a:1,b:2
}

console.log("");
console.log("########################################");
console.log("");
// Cintando Vocales en string

const frase = "La programación siempre fue y sera fascinante";
let contadorVocales = 0;
const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";

console.log("--- Contando vocales ---");
for (const char of frase) {
  if (vocales.includes(char)) {
    contadorVocales++;
  }
}
console.log(`La frase "${frase}" tiene ${contadorVocales} vocales.`);

console.log("");
console.log("########################################");
console.log("");
// SET
const numerosConDuplicados = [1, 5, 3, 2, 5, 1, 4, 3];
const numerosSinDuplicados = new Set(numerosConDuplicados); // Crea un Set a partir del array

let sumaUnicos = 0;
console.log("\n--- Sumando números únicos ---");
for (const num of numerosSinDuplicados) {
  sumaUnicos += num;
}
console.log(`La suma de los números únicos es: ${sumaUnicos}`);
// Salida: La suma de los números únicos es: 15 (1+5+3+2+4)
console.log("");
console.log("########################################");
console.log("");

// Ejemplo: Aplicando un estilo a cada elemento seleccionado
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item"); // Esto devuelve una NodeList

  console.log("\n--- Iterando sobre NodeList (elementos del DOM) ---");
  for (const item of items) {
    item.style.backgroundColor = "#e0ffe0"; // Un verde muy suave
    item.style.padding = "10px";
    item.style.marginBottom = "5px";
    console.log(`Estilo aplicado a: ${item.textContent}`);
  }
});
/*
Salida (en la consola del navegador):
Estilo aplicado a: Item 1
Estilo aplicado a: Item 2
Estilo aplicado a: Item 3 (parrafo)
(Y los elementos en la página cambiarán de color)
*/

/* const Persona = [
  {
    nombre: "Mica",
    edad: 21,
    ciudad: "Montevideo",
    dinero: "1000",
  },
  { nombre: "Lewis", edad: 26, ciudad: "Montevideo", dinero: "10000" },
  { nombre: "Totii", edad: 46, ciudad: "Montevideo", dinero: "1000000" },
];

for (const info of Persona) {
  console.log(
    `Su nombre es ${info.nombre} tiene ${info.edad} y vive en ${info.ciudad} con $${info.dinero}`
  );
}

const fechaHoy = new Date();
console.log(fechaHoy);

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
let contenidoFecha = fechaHoy;

parrafo.innerHTML = `
<h1> La fecha de hoy es📆</h1>${contenidoFecha}`;
 */

const numeros = [1, 2, 3, 4, 5, 6];

const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});
console.log(numerosPares);
