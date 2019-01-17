class CentralMedidas {

    constructor() {
        this._medidas = []; //tiene la estructura [0]ciudad|[1]valores, siendo ciudad un string y valores un array
    }

    obtenerMedidas() {
        return this._medidas;
    }

    insertarMedidas(ciudad, valores) {

        //comprobar si la ciudad ya existe
        for (let valor of this._medidas) {
            if (valor[0] == ciudad) return false;
        }

        //comprobar que valores tiene 30valores
        if (valores.length !== 30) return false;

        //por último insertamos los valores y devolvemos true

        this._medidas.push(new Array(ciudad, valores));

        return true;
    }
    actualizaMedida(ciudad, valor, dia) {
        //Comprobar si la ciudad existe
        for (let elemento of this._medidas) {

            if (elemento[0] == ciudad) {
                //actualizamos el valor
                this._medidas[0][1][dia] = valor;
                //retornamos true
                return true;
            }

            //Si llego hasta aquí es que la ciudad no existe
            return false;
        }
    }
    mediaMedidas(ciudad) {
        let media = 0; //inicializamos la media
        //buscar los valores para la ciudad
        for (let elemento of this._medidas) {
            if (elemento[0] == ciudad) {
                //sacamos la media
                let valores = this._medidas[0][1];
                media = valores.reduce(function(valorAnterior, valorActual) {
                    return valorAnterior + valorActual
                }) / 30;
                //retornamos la media como entero
                return Math.round(media);
            }
            return media;
        }
    }
    eliminaCiudad(ciudad) {
        //comprobar si la ciudad ya existe
        for (var i = 0; i < this._medidas.length; i++) {
            if (this._medidas[i][0] == ciudad) {
                //eliminamos la ciudad y sus valores
                this._medidas.splice(i, 1);
                //retornamos verdadero
                return true;
            }


        }
        //Si la ciudad no existe retorn falso
        return false;
    }
    imprime() {
        console.table(this._medidas);

    }
    toHtml() {
        let cadena = '<table><tr><th></th>';

        //Primera fila
        for (let i = 1; i < 31; i++) {
            cadena = cadena + '<th>' + i + '</th>'
        }
        //cerramos primera fila
        cadena = cadena + '</tr>'

        //Resto de filas
        for (const ciudad of this._medidas) {
            cadena = cadena + '<tr><th>' + ciudad[0] + '</th>';
            for (const valor of ciudad[1]) {
                cadena = cadena + '<th>' + valor + '</th>';
            }
        }
        cadena = cadena + '</table>';

        return cadena;

    }
}