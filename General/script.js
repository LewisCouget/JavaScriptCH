/* Find The Bug

Actividad 01:🚀

let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index) {
console.log(texto);
}

¿Qué tiene que hacer este código? - Tendria que colocar en consola una cantidad pedida del usuaro a través de "Cantidad" para mostrar el mismo texto.
¿Por qué no cumple con su función? - Porque en el "index" le falta el "++". Esto hace que el contador se incremente y pudeda llegar a lacntidad ingresada por el usuario.
Al no colocarlo se transforma en un bucle.

*/

/* 
Actividad 02:🚀
 
let lados = prompt("INGRESE CANTIDAD DE LADOS");
for (let index = 0; index < lados; index++) {
   if (index > 3) {
  } 
  alert("lado");
}

¿Qué tiene que hacer este código? - Tiene que repetir el alert "lados" veces.
¿Por qué no cumple con su función?  - Si quiere hacer un Cuadrado tendria que agregar otro for.
¿Qué propuesta podrías hacer para que tenga sentido su uso?  - Tendria que sacar el "if" que no esta haciendo nada.

9/4/2025
==========================================================*/

/* 
Actividad 01:🚀
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar. 
*/

/* function parImpar(num) {
  const esPar = num % 2 === 0;
  if (esPar) {
    alert(`El número ${num} es Par`);
  } else alert(`El número ${num} es Impar`);
}

function ingresarNúmero(num) {
  num = Number(prompt(`Ingrese un número!`));

  if (!num) {
    num = Number(prompt(alert(`Por favor, Ingrese un numero!`)));
  }
  return num;
}

parImpar(ingresarNúmero()); */

/*   let num = parseInt(prompt(`Ingrese un numero!`));

const esPar = num % 2 === 0;

if (esPar) {
  console.log(`El número ${num} es par`);
} else console.log(`El número ${num} es impar`);
 */
/* 
Actividad 02:🚀
Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir". 
*/
/* 
let num = prompt(`Ingrese un número o escriba "salir" para terminar!`);
let par = 0;
let impar = 0;

while (num !== "salir") {
  const numero = parseInt(num);

  if (!isNaN(numero)) {
    const esPar = num % 2 === 0;
    if (esPar) {
      par++;
    } else {
      impar++;
    }
  }
  num = prompt(`Ingrese otro número o escriba "salir" para terminar!`);
}

const mensajePar = par === 1 ? "número par" : "números pares";
const mensajeImpar = impar === 1 ? "número impar" : "números impares";
alert(`Son ${par} ${mensajePar} y ${impar} ${mensajeImpar}`);
 */

/* Tablas con for🚀*/

/* let ingresarNumero = parseInt(prompt("Ingresar Número"));
if (!isNaN(ingresarNumero)) {
  for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + "X" + i + "=" + resultado);
  }
} else {
  alert("Incorrecto. Ingrese un número");
} */

/* Repetir x cantidad de veces un texto */
/*🚀
let cantidad = parseInt(
  prompt("Ingrese la cantidad de veces que quiera repetir el mensaje!")
);
const mensaje = "Hola Coders!";
for (let i = 1; i <= cantidad; i++) {
  console.log(mensaje);
}
const singularPlural =
  cantidad === 1 ? "sola vez el mensaje!" : "veces el menaje!";
alert(`Se repitio ${cantidad} ${singularPlural}`);
 */

//==================================================

/* 2.Fundamentos de JavaScript 🚀*/

/* 
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del ciclo cuando i es igual a 5
    }
    console.log(i); // Imprime los números de 0 a 4
} */

/* 
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Omite los números pares
  }
  console.log(i); // Imprime los números impares entre 0 y 9
} */

/* Ejemplos Avanzados */
/* 
const usuarios = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Carlos", edad: 18 },
  { nombre: "María", edad: 15 },
];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].edad >= 18) {
    console.log(usuarios[i].nombre);
  }
}
 */

/* Actividad Práctica */

/* 
let suma = 0;

let entrada = prompt(`Ingrese un número o escriba "salir" para terminar:`);

while (entrada !== "salir") {
  let num = Number(entrada);

  if (!isNaN(num)) {
    suma += num;
    console.log(`La suma es ${suma}`);
  } else {
    console.log(`Error: Debe ingresar un número válido o "salir"`);
  }

  entrada = prompt(`Ingrese otro número o escriba "salir" para terminar:`);
}

alert(`La suma total es ${suma}`);
 */

/* 
let texto = prompt(`Ingrese un texto o escriba "ESC" para terminar:`);

let resultado = "";

while (texto !== "ESC") {
  resultado += texto + " "; 
  console.log(`Resultado actual: ${resultado}`); 

  texto = prompt(`Ingrese otro texto o escriba "ESC" para terminar:`); 
}

alert(`El texto concatenado final es: ${resultado}`); 
 */

/* 
let saludo = `Hola`;
let cantidad = Number(prompt(`Ingrese cantidad!`));

for (let i = 0; i < cantidad; i++) {
  console.log(saludo);
}
 */

/* 🚀 3.1 Introducciín a las Funciones 🚀*/

/* 
// Sin encapsular operaciones complejas
let base = 10;
let altura = 5;
let areaTriangulo = (base * altura) / 2;
console.log(`El área del triángulo es ${areaTriangulo}`);

// Encapsulando la lógica en una función
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log(`El área del triángulo es ${calcularAreaTriangulo(10, 5)}`);
 */

/* 
// Función para calcular el precio final con descuento
function calcularPrecioFinal(precio, descuento) {
  return precio - (precio * descuento) / 100;
}

// Reutilizando la función en diferentes contextos
let precioCamisa = calcularPrecioFinal(50, 10);
let precioPantalon = calcularPrecioFinal(80, 15);

console.log(`Precio final de la camisa: ${precioCamisa}`);
console.log(`Precio final del pantalón: ${precioPantalon}`);
 */

/* // Función para calcular el descuento
function calcularDescuento(precio, porcentajeDescuento) {
    return precio - (precio * porcentajeDescuento / 100);
}

// Función para calcular el precio final incluyendo impuestos
function calcularPrecioFinal(precio, descuento, impuesto) {
    let precioConDescuento = calcularDescuento(precio, descuento);
    return precioConDescuento + (precioConDescuento * impuesto / 100);
}

// Invocación
let total = calcularPrecioFinal(100, 10, 21);
console.log(total); // Muestra: 98.9 */

/* 
function devolverLibro(titulo, diasRetraso = 0) {
  const multa = diasRetraso * 0.5;
  const mensaje =
    diasRetraso > 0
      ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}`
      : "Devuelto a tiempo. No hay multa.";
  console.log(`Libro "${titulo}": ${mensaje}`);
}

devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.
 */

/* 🚀TIPOS DE FUNCIONES🚀 */

/* TRADICIONAL 
function sumar(a, b) {
  return a + b;
}
console.log(sumar(10, 5));

FLECHA 
const sumarFlecha = (a, b) => {
  return a + b;
};
console.log(sumarFlecha(15, 5));

FLECHA SIMPLE 
const sumarFlecha2 = (a, b) => a + b;
console.log(sumarFlecha2(20, 5));

FLECHA MAS SIMLE
const sumarFlechaSimple = (a) => a + 10;
console.log(sumarFlechaSimple(30));
 */

/* Actividad Práctica 3.5 */

/* Ejemplo

Crear una función que solicite los datos de entrada

Crear una función que procese la información obtenida.

Crear una función para mostrar el resultado final 
*/

/* function solicitar() {
  return prompt(`Ingrese sus datos!`);
}

function info(dato) {
  console.log(`Su información es "${dato}"`);
}

function mostrar() {
  return info(solicitar());
}

mostrar();
const datoIngresado = solicitar();
info(datoIngresado);
 */
/* const nombres=[ 'Juan', 'Romina',] */

/* const colores = ["rojo", "verde", "azul"];
console.log(colores[0]);

const semaforo = {
  rojo: "Detenerse",
  verde: "Avanzar",
  azul: "Cuidado",
};

console.log(semaforo.rojo); */

const personas = [
  { nombre: "Sofía", edad: 28, ciudad: "Buenos Aires" },
  { nombre: "Brandon", edad: 35, ciudad: "Ciudad de México" },
  { nombre: "Valentina", edad: 22, ciudad: "Bogotá" },
  { nombre: "Carlos", edad: 41, ciudad: "Santiago de Chile" },
  { nombre: "Isabella", edad: 29, ciudad: "Montevideo" },
];

//🚀 PUSH 🚀 Añade un elemento al final del array
personas.push({ nombre: "Ariel", edad: 38, ciudad: "Maldonado" });

// 🚀 FILTRAR 🚀
/* const menorDe30 = personas.filter((personas) => personas.edad < 30);
console.log(menorDe30); */

// 🚀 SORT 🚀 Ordena los elementos del array
/* personas.sort((a, b) => a.edad - b.edad);
console.log(personas); */

/* personas.sort((a, b) => a.ciudad.localeCompare(b.ciudad));
console.log(personas); */

/* personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas); */

// 🚀 POP 🚀 Elimina el último elemento del array
/* let eliminarPersona = personas.pop();
console.log(eliminarPersona);
console.log(personas); */

//🚀 UNSHIFT 🚀 Añade un elemento al inicio del array
/* personas.unshift({ nombre: "Gregory", edad: 58, ciudad: "New York" });
console.log(personas); */

//🚀 REVERSE 🚀 Invierte el orden de los elementos en el array
/* personas.reverse();
console.log(personas); */

// 🚀 JOIN 🚀
// 🚀 MAP 🚀
/* const nombresPersonas = personas.map((personas) => personas.nombre).join(" - ");
console.log(nombresPersonas); */

// 🚀 INDEXOF 🚀
/* let nombres = personas.map((persona) => persona.nombre);
let indice = nombres.indexOf("Valentina");
console.log(indice); */

//🚀 INCLUDES 🚀
/* let nombres = personas.map((people) => people.nombre); //Crea un array de nombres de "personas"
let contiene = nombres.includes("Valentina");
console.log(contiene); */
