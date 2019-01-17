function mayus(e) {
    e.value = e.value.toUpperCase();
}

/**
 * Genera 30 valores aleatorios entre -5 y 40
 */
function medidasAleatorias() {
    let cadena = "";
    for (let i = 0; i < 30; i++) {
        cadena = cadena + (Math.floor(
            (Math.random() * 40 - 5 + 1)) - 5) + ",";
    }
    //El slice es para quitar la última coma
    return cadena.substring(0, cadena.length - 1)
}

function validarFormulario(txtCiudad, medidas) {

    //La expresión regular es para identificar todo espacios en blanco

    if (txtCiudad.value.length == 0 || /^\s*$/.test(txtCiudad.value))
        return ["El campo del nombre está vacío", false];
    if (ciudadRepetida(txtCiudad, medidas)) return ["El nombre de la ciudad ya existe", false];



    return ["validación correcta", true];
}

function ciudadRepetida(ciudad, medidas) {
    //comprobar si la ciudad ya existe
    for (let valor of medidas) {
        if (valor[0] == ciudad) return true;
    }
    return false;
}