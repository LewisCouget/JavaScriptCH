// script.js

// --- 1. Selecciones de Elementos del DOM ---
const saludoElemento = document.querySelector(".saludo");
const botonRegistrar = document.querySelector(".botonRegistrar");
const parrafoRegistroInfo = document.querySelector(".registro-info");

const seccionGestionAlumnos = document.querySelector(".gestion-alumnos");
const btnAgregarAlumno = document.querySelector(".btn-agregar-alumno");
const btnEliminarAlumno = document.querySelector(".btn-eliminar-alumno");
const listaAlumnosUL = document.querySelector(".lista-alumnos");

// Nuevos elementos para la sección de promedios
const seccionPromedios = document.querySelector(".seccion-promedios");
const valorPromedioGeneral = document.getElementById("valor-promedio-general");
const listaPromediosUL = document.querySelector(".lista-promedios");

// --- 2. Constantes Globales ---
const SS_KEY_PROFESOR = "profesorRegistrado";
const SS_KEY_ALUMNOS = "listaAlumnos";

// --- 3. Funciones de Utilidad (Validaciones Reutilizables) ---

/**
 * Valida un nombre de profesor o alumno.
 * @param {string} currentNombre - El nombre a validar.
 * @param {string} tipoPersona - 'Profesor' o 'Alumno' para mensajes.
 * @returns {string|null} El nombre validado y recortado, o null si el usuario cancela.
 */
function validarNombre(currentNombre, tipoPersona = "Profesor") {
  let nombre = currentNombre;
  while (!nombre || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]+$/.test(nombre.trim())) {
    alert(
      `Error! Ingrese un nombre correcto para el ${tipoPersona} (solo letras, espacios y guiones).`
    );
    if (nombre === null) return null;
    nombre = prompt(`${tipoPersona}: Ingrese su nombre:`, nombre || "");
  }
  return nombre.trim();
}

/**
 * Valida una edad de profesor o alumno.
 * @param {number} currentAge - La edad a validar.
 * @param {number} minAge - Edad mínima permitida.
 * @param {number} maxAge - Edad máxima permitida.
 * @param {string} tipoPersona - 'Profesor' o 'Alumno' para mensajes.
 * @returns {number|null} La edad validada, o null si el usuario cancela.
 */
function validarEdad(currentAge, minAge, maxAge, tipoPersona = "Profesor") {
  let age = Number(currentAge);
  while (isNaN(age) || age > maxAge || age < minAge) {
    alert(
      `Error! Ingrese una edad correcta para el ${tipoPersona} entre ${minAge} y ${maxAge} años!`
    );
    if (currentAge === null || String(currentAge).trim() === "") return null;
    currentAge = prompt(`${tipoPersona}: Ingrese su edad:`, currentAge || "");
    age = Number(currentAge);
  }
  return age;
}

/**
 * Valida un email de profesor o alumno.
 * @param {string} currentEmail - El email a validar.
 * @param {string} tipoPersona - 'Profesor' o 'Alumno' para mensajes.
 * @returns {string|null} El email validado y recortado, o null si el usuario cancela.
 */
function validarEmail(currentEmail, tipoPersona = "Profesor") {
  let email = currentEmail;
  while (
    !email ||
    !email.includes("@") ||
    email.trim() === "" ||
    !email.includes(".", email.indexOf("@") + 1)
  ) {
    alert(
      `Por favor, ingrese un email válido para el ${tipoPersona} (debe contener '@' y '.').`
    );
    if (email === null) return null;
    email = prompt(`${tipoPersona}: Ingrese su email:`, email || "");
  }
  return email.trim();
}

/**
 * Valida una cédula (7 u 8 dígitos numéricos).
 * @param {string} currentCedula - La cédula a validar.
 * @returns {string|null} La cédula validada y recortada, o null si el usuario cancela.
 */
function validarCedula(currentCedula) {
  let cedula = currentCedula;
  while (!cedula || !/^\d{7,8}$/.test(cedula.trim())) {
    alert("Error! Ingrese una cédula válida (7 u 8 dígitos numéricos).");
    if (cedula === null) return null;
    cedula = prompt("Alumno: Ingrese su cédula:", cedula || "");
  }
  return cedula.trim();
}

/**
 * Valida una nota (entre 0 y 100).
 * @param {number} currentNota - La nota a validar.
 * @returns {number|null} La nota validada, o null si el usuario cancela.
 */
function validarNota(currentNota) {
  let nota = Number(currentNota);
  while (isNaN(nota) || nota < 0 || nota > 100) {
    alert("Error! Ingrese una nota válida entre 0 y 100.");
    if (currentNota === null || String(currentNota).trim() === "") return null;
    currentNota = prompt("Alumno: Ingrese su nota:", currentNota || "");
    nota = Number(currentNota);
  }
  return nota;
}

// --- 4. Funciones de Lógica de Negocio y UI ---

// Funciones para manejar el almacenamiento (sessionStorage)
function guardarProfesor(profesor) {
  sessionStorage.setItem(SS_KEY_PROFESOR, JSON.stringify(profesor));
  console.log("Profesor guardado en sessionStorage:", profesor);
}

function cargarProfesor() {
  const profesorJSON = sessionStorage.getItem(SS_KEY_PROFESOR);
  if (profesorJSON) {
    try {
      const profesor = JSON.parse(profesorJSON);
      console.log("Profesor cargado de sessionStorage:", profesor);
      return profesor;
    } catch (e) {
      console.error("Error al parsear el profesor de sessionStorage:", e);
      sessionStorage.removeItem(SS_KEY_PROFESOR);
      return null;
    }
  }
  console.log("No hay profesor registrado en sessionStorage.");
  return null;
}

function guardarAlumnos(alumnos) {
  sessionStorage.setItem(SS_KEY_ALUMNOS, JSON.stringify(alumnos));
  console.log("Alumnos guardados en sessionStorage:", alumnos);
}

function cargarAlumnos() {
  const alumnosJSON = sessionStorage.getItem(SS_KEY_ALUMNOS);
  if (alumnosJSON) {
    try {
      const alumnos = JSON.parse(alumnosJSON);
      console.log("Alumnos cargados de sessionStorage:", alumnos);
      return alumnos;
    } catch (e) {
      console.error("Error al parsear los alumnos de sessionStorage:", e);
      sessionStorage.removeItem(SS_KEY_ALUMNOS);
      return [];
    }
  }
  console.log("No hay alumnos registrados en sessionStorage.");
  return [];
}

// Funciones para actualizar la Interfaz de Usuario (UI)
function actualizarSaludoProfesor(nombreProfesor) {
  if (saludoElemento) {
    saludoElemento.textContent = `¡Bienvenido, Profesor ${nombreProfesor}!`;
  } else {
    console.error("El elemento con la clase 'saludo' no fue encontrado.");
  }
}

function ocultarElementosRegistro() {
  if (parrafoRegistroInfo) {
    parrafoRegistroInfo.style.display = "none";
  }
  console.log("Párrafo y botón de registro ocultos.");
}

function mostrarGestionAlumnos() {
  if (seccionGestionAlumnos) {
    seccionGestionAlumnos.style.display = "block";
    console.log("Sección de gestión de alumnos mostrada.");
  } else {
    console.error("La sección de gestión de alumnos no fue encontrada.");
  }
  if (seccionPromedios) {
    // Mostrar la sección de promedios también
    seccionPromedios.style.display = "block";
    console.log("Sección de promedios mostrada.");
  } else {
    console.error("La sección de promedios no fue encontrada.");
  }
}

/**
 * Calcula el promedio general de notas de un array de alumnos.
 * @param {object[]} alumnos - Array de objetos alumno.
 * @returns {string} El promedio formateado o 'N/A' si no hay alumnos.
 */
function calcularPromedioGeneral(alumnos) {
  if (alumnos.length === 0) {
    return "N/A";
  }
  const totalNotas = alumnos.reduce((sum, alumno) => sum + alumno.nota, 0);
  const promedio = totalNotas / alumnos.length;
  return promedio.toFixed(2); // Formatear a 2 decimales
}

// ... (resto de tu código script.js) ...

/**
 * Categoriza la nota de un alumno según los criterios dados.
 * Ahora devuelve un objeto con el texto y una clase CSS.
 * @param {number} nota - La nota del alumno.
 * @returns {object} Un objeto { text: string, className: string }.
 */
function categorizarNota(nota) {
  if (nota >= 80 && nota <= 100) {
    return {
      text: "¡Excelente! Exonera la materia.",
      className: "nota-excelente",
    };
  } else if (nota >= 50 && nota <= 79) {
    return { text: "Examen Categoría A.", className: "nota-examen-a" };
  } else if (nota >= 30 && nota <= 49) {
    return { text: "Examen Categoría B.", className: "nota-examen-b" };
  } else if (nota >= 1 && nota <= 29) {
    return {
      text: "No tiene derecho a examen. Reprueba la materia.",
      className: "nota-reprobado",
    };
  } else {
    return { text: "Nota inválida o no presentada.", className: "nota-neutra" };
  }
}

// ... (resto de tu código script.js) ...

/**
 * Renderiza la lista de alumnos en el HTML (<ul>).
 * Asegúrate de que esta función use la nueva estructura de categorizarNota.
 */
function renderizarAlumnos(alumnos) {
  if (listaAlumnosUL) {
    listaAlumnosUL.innerHTML = "";
    if (alumnos.length === 0) {
      listaAlumnosUL.innerHTML =
        '<li style="font-style: italic; color: #666;">No hay alumnos registrados todavía.</li>';
    } else {
      alumnos.forEach((alumno, index) => {
        const categoria = categorizarNota(alumno.nota); // Obtener el objeto de categoría
        const li = document.createElement("li");
        li.innerHTML = `
                    <strong>${alumno.nombre}</strong> (Edad: ${alumno.edad}, Cédula: ${alumno.cedula}, Email: ${alumno.email}) - Nota: <strong>${alumno.nota}</strong> <span class="${categoria.className}">(${categoria.text})</span>
                    <button class="btn-eliminar-alumno-individual" data-index="${index}" style="margin-left: 10px; background-color: var(--nota-reprobado); color: white; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer;">X</button>
                `;
        listaAlumnosUL.appendChild(li);
      });
      adjuntarEventosEliminarIndividual();
    }
    console.log("Alumnos renderizados en lista principal:", alumnos);
  } else {
    console.error("El elemento UL para la lista de alumnos no fue encontrado.");
  }
}

/**
 * Renderiza la lista de promedios individuales en el HTML, ordenados por nota de mayor a menor.
 * @param {object[]} alumnos - Array de objetos alumno.
 */
function renderizarPromedios(alumnos) {
  if (listaPromediosUL && valorPromedioGeneral) {
    valorPromedioGeneral.textContent = calcularPromedioGeneral(alumnos);
    listaPromediosUL.innerHTML = "";

    if (alumnos.length === 0) {
      listaPromediosUL.innerHTML =
        '<li style="font-style: italic; color: #666;">No hay alumnos para calcular promedios.</li>';
    } else {
      const alumnosOrdenados = [...alumnos].sort((a, b) => b.nota - a.nota);

      alumnosOrdenados.forEach((alumno) => {
        const li = document.createElement("li");
        const categoria = categorizarNota(alumno.nota); // Obtener el objeto de categoría

        // Añadimos la clase CSS al <li> para aplicar el color gradual
        li.classList.add(categoria.className);
        li.innerHTML = `
                    <strong>${alumno.nombre}:</strong> Nota ${alumno.nota} - ${categoria.text}
                `;
        listaPromediosUL.appendChild(li);
      });
    }
    console.log("Promedios de alumnos renderizados (ordenados).");
  } else {
    console.error("Elementos de promedios (UL o span) no encontrados.");
  }
}

// ... (resto de tu código sin cambios desde aquí) ...

// --- 5. Manejadores de Eventos ---

function registrarProfesor() {
  const nombre = validarNombre(
    prompt("Profesor: Ingrese su nombre:"),
    "Profesor"
  );
  if (nombre === null) return;

  const edad = validarEdad(
    prompt("Profesor: Ingrese su edad:"),
    21,
    80,
    "Profesor"
  );
  if (edad === null) return;

  const email = validarEmail(prompt("Profesor: Ingrese su email:"), "Profesor");
  if (email === null) return;

  alert("Registrado con éxito!");

  const nuevoProfesor = {
    nombre: nombre,
    edad: edad,
    email: email,
  };

  guardarProfesor(nuevoProfesor);
  actualizarSaludoProfesor(nuevoProfesor.nombre);
  ocultarElementosRegistro();
  mostrarGestionAlumnos(); // Mostrar sección de alumnos y promedios

  const alumnosCargados = cargarAlumnos(); // Asegurarse de que el array de alumnos se cargue antes de renderizar
  renderizarAlumnos(alumnosCargados);
  renderizarPromedios(alumnosCargados); // Renderizar promedios también
}

function agregarAlumno() {
  const nombre = validarNombre(
    prompt("Alumno: Ingrese el nombre del alumno:"),
    "Alumno"
  );
  if (nombre === null) return;

  const edad = validarEdad(
    prompt("Alumno: Ingrese la edad del alumno:"),
    5,
    20,
    "Alumno"
  ); // Rango típico para alumnos
  if (edad === null) return;

  const email = validarEmail(
    prompt("Alumno: Ingrese el email del alumno:"),
    "Alumno"
  );
  if (email === null) return;

  const cedula = validarCedula(
    prompt("Alumno: Ingrese la cédula del alumno (7 u 8 dígitos):")
  );
  if (cedula === null) return;

  const nota = validarNota(
    prompt("Alumno: Ingrese la nota del alumno (0-100):")
  );
  if (nota === null) return;

  const nuevoAlumno = {
    nombre: nombre,
    edad: edad,
    email: email,
    cedula: cedula,
    nota: nota,
  };

  const alumnosActuales = cargarAlumnos();
  alumnosActuales.push(nuevoAlumno);
  guardarAlumnos(alumnosActuales);
  renderizarAlumnos(alumnosActuales);
  renderizarPromedios(alumnosActuales); // Actualizar promedios al agregar
  alert(`Alumno ${nombre} agregado.`);
}

function eliminarUltimoAlumno() {
  const alumnosActuales = cargarAlumnos();
  if (alumnosActuales.length > 0) {
    const alumnoEliminado = alumnosActuales.pop();
    guardarAlumnos(alumnosActuales);
    renderizarAlumnos(alumnosActuales);
    renderizarPromedios(alumnosActuales); // Actualizar promedios al eliminar
    alert(`Se eliminó al alumno: ${alumnoEliminado.nombre}`);
  } else {
    alert("No hay alumnos para eliminar.");
  }
}

function adjuntarEventosEliminarIndividual() {
  const botonesEliminarIndividual = document.querySelectorAll(
    ".btn-eliminar-alumno-individual"
  );
  botonesEliminarIndividual.forEach((button) => {
    button.onclick = null;
    button.onclick = (event) => {
      const index = parseInt(event.target.dataset.index);
      eliminarAlumnoPorIndice(index);
    };
  });
}

function eliminarAlumnoPorIndice(index) {
  const alumnosActuales = cargarAlumnos();
  if (index >= 0 && index < alumnosActuales.length) {
    const alumnoEliminado = alumnosActuales.splice(index, 1);
    guardarAlumnos(alumnosActuales);
    renderizarAlumnos(alumnosActuales);
    renderizarPromedios(alumnosActuales); // Actualizar promedios al eliminar individualmente
    alert(`Alumno ${alumnoEliminado[0].nombre} eliminado.`);
  }
}

// --- 6. Lógica de Inicialización (cuando el DOM está listo) ---
document.addEventListener("DOMContentLoaded", function () {
  // Asigna el evento al botón de registro
  if (botonRegistrar) {
    botonRegistrar.addEventListener("click", registrarProfesor);
  } else {
    console.error("El botón con la clase 'botonRegistrar' no fue encontrado.");
  }

  // Asigna eventos a los botones de alumno
  if (btnAgregarAlumno) {
    btnAgregarAlumno.addEventListener("click", agregarAlumno);
  }
  if (btnEliminarAlumno) {
    btnEliminarAlumno.addEventListener("click", eliminarUltimoAlumno);
  }

  // Intenta cargar el profesor al inicio
  const profesorCargado = cargarProfesor();

  if (profesorCargado) {
    actualizarSaludoProfesor(profesorCargado.nombre);
    ocultarElementosRegistro();
    mostrarGestionAlumnos(); // Mostrar sección de alumnos y promedios
    const alumnosCargados = cargarAlumnos();
    renderizarAlumnos(alumnosCargados);
    renderizarPromedios(alumnosCargados); // Renderizar promedios al cargar
  } else {
    if (saludoElemento) {
      saludoElemento.textContent =
        "¡Bienvenido! Por favor, regístrate como Profesor.";
    }
  }
});
