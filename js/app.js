// =========================================
// 1. CAPTURAR ELEMENTOS DEL DOM
// =========================================
const formulario = document.getElementById('formularioArcade');

const inputJugador = document.getElementById('jugador');
const inputPuntos = document.getElementById('puntos');
const inputConfirmar = document.getElementById('confirmarPuntos');
const selectNivel = document.getElementById('nivel');

const errorJugador = document.getElementById('errorJugador');
const errorPuntos = document.getElementById('errorPuntos');
const errorConfirmar = document.getElementById('errorConfirmar');
const errorNivel = document.getElementById('errorNivel');

// =========================================
// 2. FUNCIONES DE FEEDBACK VISUAL
// =========================================

// Función para mostrar el error inyectando texto y la clase CSS
function mostrarError(input, spanError, mensaje) {
    spanError.textContent = mensaje;
    input.classList.add('input-error');
}

// Función para limpiar los errores antes de cada nueva validación
function limpiarErrores() {
    const spans = document.querySelectorAll('.msg-error');
    const inputs = document.querySelectorAll('input, select');

    spans.forEach(span => span.textContent = '');
    inputs.forEach(input => input.classList.remove('input-error'));
}

// =========================================
// 3. EVENTOS Y LÓGICA DE VALIDACIÓN
// =========================================

inputJugador.addEventListener('input', function (e) {
    e.target.value = e.target.value.toUpperCase();
});

selectNivel.addEventListener('change', function (e) {
    console.log("Nivel seleccionado: ", e.target.value);
});

formulario.addEventListener('submit', function (e) {
    // Prevención de envío cuando existan errores
    e.preventDefault();

    limpiarErrores();
    let formularioValido = true;

    // --- REGLA 1: Requerido y REGLA 2: Longitud (Iniciales) ---
    if (inputJugador.value.trim() === '') {
        mostrarError(inputJugador, errorJugador, 'Las iniciales son requeridas.');
        formularioValido = false;
    } else if (inputJugador.value.trim().length !== 3) {
        mostrarError(inputJugador, errorJugador, 'Deben ser exactamente 3 letras.');
        formularioValido = false;
    }
    // --- REGLA 3: Formato (Solo letras usando Regex) ---
    else if (!/^[A-Z]+$/.test(inputJugador.value)) {
        mostrarError(inputJugador, errorJugador, 'Formato inválido. Solo letras.');
        formularioValido = false;
    }

    // --- REGLA 1 (Requerido) y REGLA 5: Adicional (Puntuación mínima) ---
    if (inputPuntos.value.trim() === '') {
        mostrarError(inputPuntos, errorPuntos, 'Ingresa la puntuación.');
        formularioValido = false;
    } else if (parseInt(inputPuntos.value) <= 0) { // Regla adicional: No puede ser cero o negativo
        mostrarError(inputPuntos, errorPuntos, 'La puntuación debe ser mayor a 0.');
        formularioValido = false;
    }

    // --- REGLA 4: Coincidencia (Confirmar Puntuación) ---
    if (inputConfirmar.value.trim() === '') {
        mostrarError(inputConfirmar, errorConfirmar, 'Debes confirmar la puntuación.');
        formularioValido = false;
    } else if (inputConfirmar.value !== inputPuntos.value) {
        mostrarError(inputConfirmar, errorConfirmar, 'Las puntuaciones no coinciden.');
        formularioValido = false;
    }

    // --- REGLA 1: Requerido (Nivel) ---
    if (selectNivel.value === '') {
        mostrarError(selectNivel, errorNivel, 'Debes seleccionar un nivel.');
        formularioValido = false;
    }

    // Si todo es válido, pasamos al siguiente paso (Guardar datos)
    if (formularioValido) {
        console.log("¡Validación exitosa! Listo para guardar en LocalStorage.");
        // Aquí llamaremos a la función de guardado en el próximo paso

        // Opcional: limpiar el formulario tras el éxito
        // formulario.reset();
    } else {
        console.log("Hay errores en el formulario.");
    }
});