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
        let dvTablaMedidas = d.getElementById('tabla-medidas');
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

            let medidas = txtMedidas.value.split(',');
            let respuesta = validarFormulario(txtCiudad, medidas, centralMedidas);
            let mensaje = respuesta[0];
            let valido = respuesta[1];

            if (valido) {
                //Borro errores
                dvErrores.innerHTML = "Errores: "
                    //Guado datos
                centralMedidas.insertarMedidas(txtCiudad.value, medidas);

                //Muestro en una tabla
                dvTablaMedidas.innerHTML = centralMedidas.toHtml();
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