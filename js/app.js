// =========================================
// 1. CAPTURAR ELEMENTOS DEL DOM
// =========================================
const formulario = document.getElementById('formularioArcade');

// Inputs del formulario
const inputJugador = document.getElementById('jugador');
const inputPuntos = document.getElementById('puntos');
const inputConfirmar = document.getElementById('confirmarPuntos');
const selectNivel = document.getElementById('nivel');

// Contenedores para los mensajes de error
const errorJugador = document.getElementById('errorJugador');
const errorPuntos = document.getElementById('errorPuntos');
const errorConfirmar = document.getElementById('errorConfirmar');
const errorNivel = document.getElementById('errorNivel');

// =========================================
// 2. EVENTOS REQUERIDOS (Mínimo 3 distintos)
// =========================================

// Evento 1: 'submit' (Se dispara al presionar el botón de guardar)
formulario.addEventListener('submit', function (e) {
    // PREVENCIÓN DE ENVÍO: Evita que la página se recargue por defecto
    e.preventDefault();

    console.log("Formulario interceptado. Listo para validar...");

    // En el próximo paso, aquí llamaremos a la función que valida las 5 reglas.
});

// Evento 2: 'input' (Se dispara en tiempo real mientras el usuario escribe)
inputJugador.addEventListener('input', function (e) {
    // Detalle extra para estilo Arcade: convertir todo a mayúsculas automáticamente
    e.target.value = e.target.value.toUpperCase();
    console.log("Escribiendo iniciales: ", e.target.value);
});

// Evento 3: 'change' (Se dispara cuando el usuario cambia la opción del select)
selectNivel.addEventListener('change', function (e) {
    console.log("Nivel seleccionado: ", e.target.value);
});