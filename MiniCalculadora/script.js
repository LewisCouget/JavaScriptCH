function sumar(a, b) {
  return a + b;
}

const restar = (a, b) => {
  return a - b;
};

function dividir(a, b) {
  if (b === 0) {
    return "Error! No se puede dividir entre cero";
  }
  return a / b;
}

function multiplicar(a, b) {
  return a * b;
}

function bhaskara(a, b, c) {
  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    return "La ecuación no tiene soluciones reales (discriminante negativo)";
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return `Una única solución real: x = ${x}`;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Dos soluciones reales: x1 = ${x1} y x2 = ${x2}`;
  }
}

function mostrarCatalogo() {
  const opciones = `
Seleccione una opción:
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Bhaskara
`;

  const opcionSeleccionada = prompt(opciones);

  while (!["1", "2", "3", "4", "5"].includes(opcionSeleccionada)) {
    if (opcionSeleccionada === null) {
      alert("Operación cancelada!");
      return;
    }
    alert("Opción inválida! Por favor, seleccione una opción del 1 al 5.");
    opcionSeleccionada = prompt(opciones);
  }

  const numero1 = parseFloat(prompt("Ingrese el primer número:"));
  const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

  if (!isNaN(numero1) && !isNaN(numero2)) {
    switch (opcionSeleccionada) {
      case "1":
        alert(`El resultado de la suma es: ${sumar(numero1, numero2)}`);
        break;
      case "2":
        alert(`El resultado de la resta es: ${restar(numero1, numero2)}`);
        break;
      case "3":
        alert(
          `El resultado de la multiplicación es ${multiplicar(
            numero1,
            numero2
          )}`
        );
        break;
      case "4":
        alert(`El resultado de la división es: ${dividir(numero1, numero2)}`);
        break;
      case "5":
        const numero3 = parseFloat(prompt("Ingrese el tercer número:"));
        alert(
          `El resultado de Bhaskara es: ${bhaskara(numero1, numero2, numero3)} `
        );
      default:
    }
  } else {
    alert("Por favor, ingrese número válidos!");
  }
}

mostrarCatalogo();
