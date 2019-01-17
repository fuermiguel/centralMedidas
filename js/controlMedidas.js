(function(w, d, undefined) {
    //Instanciamos la clase CentralMedidas
    let centralMedidas = new CentralMedidas();

    //Esperamos a que carge la página
    w.onload = function() {

        //Cargamos en las variables los elementos de la página
        let txtCiudad = d.getElementById('ciudad');
        let txtMedidas = d.getElementById('medidas');
        let rdManual = d.getElementById('medidas_manual');
        let rdAleatorio = d.getElementById('medidas_aleatorio');
        let btnGuardar = d.getElementById('guardar');
        // let btnBorrar = d.getElementByIdç('borrar');
        let btnModificar = d.getElementById('modificar');
        let dvErrores = d.getElementById('errores');
        /************manejo de number???????????????********** */


        //Definición de eventos
        txtCiudad.addEventListener('keyup', function() {
            //Llamamos a la función que me convierte en mayuscula 
            //la letra introducida en el campo ciudad.
            mayus(this);
        }, false);

        rdAleatorio.addEventListener('change', function() {
            //inicializamos
            txtMedidas.value = '';
            txtMedidas.readOnly = true;
            txtMedidas.focus();
            //Llamamos a una función que nos de los 30 valores aleatorios)
            txtMedidas.value = medidasAleatorias();
        }, false);

        rdManual.addEventListener('change', function() {
            //Inicializamos
            txtMedidas.value = '';
            txtMedidas.readOnly = false;
        }, false);

        btnGuardar.addEventListener('click', function() {
            //validar
            //Nombre tiene contenido //El método test() busca una ocurrencia entre una expresión regular y una cadena
            let respuesta = validarFormulario(txtCiudad, txtMedidas.value.split(',')); //Para llmar a la función solo una vez
            let mensaje = respuesta[0];
            let valido = respuesta[1];

            if (valido) {
                dvErrores.innerHTML = "Errores: "
            } else {
                dvErrores.innerHTML = "Errores: " + mensaje;
            }
            //campo de nombre no está repetido
            //campo de medidas 30 valorse separados por comas
            //valores en rango permitido


            //Si error mostralo en el campo correspondiente

            //Si correcto mostramos la tabla con todas las ciudades

            //Por último mostrar la temperatura media de todas las ciudades
        })
    }
})(window, document);