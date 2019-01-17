function mayus(e) {
    e.value = e.value.toUpperCase();
}

/**
 * Genera 30 valores aleatorios entre -5 y 40
 */
function medidasAleatorias() {
    let cadena = "";
    for (let i = 0; i < 30; i++) {
        cadena = cadena + Math.round(Math.random() * (40 + 5) - 5) + ",";
    }
    //El slice es para quitar la última coma
    return cadena.substring(0, cadena.length - 1)
}

function validarFormulario(txtCiudad, medidas, centralMedidas) {

    //La expresión regular es para identificar todo espacios en blanco

    if (txtCiudad.value.length == 0 || /^\s*$/.test(txtCiudad.value))
        return ["El campo del nombre está vacío", false];
    if (ciudadRepetida(txtCiudad, centralMedidas)) return ["El nombre de la ciudad ya existe", false];

    if (!numeroValoresCorrecto(medidas)) return ["No hay 30 medidas", false];

    if (!valoresEnRango(medidas, -5, 40)) return ["medidas fuera de rango", false];


    return ["validación correcta", true];
}

function ciudadRepetida(ciudad, centralMedidas) {
    for (let valor of centralMedidas.obtenerMedidas()) {
        if (valor[0] == ciudad.value) return true;
    }
    return false;
}
/**
 * Comprueba si los valores de las medidas están entre un valor inferior y otro superior
 */
function valoresEnRango(medidas, vInferior, vSuperior) {
    for (const valor of medidas) {
        if (valor < vInferior || valor > vSuperior) return false;
    }
    return true;
}

function numeroValoresCorrecto(medidas) {
    if (medidas.length !== 30) return false;
    return true;
}