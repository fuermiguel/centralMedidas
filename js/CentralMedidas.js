class CentralMedidas {

    constructor() {
        this._medidas = []; //tiene la estructura [0]ciudad|[1]valores, siendo ciudad un string y valores un array
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

    }
}

let centralMedidas;
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    //Lo que está quí dentro se ejecuta antes de cada prueba
centralMedidas = new CentralMedidas();
centralMedidas.insertarMedidas("avila", valores);
centralMedidas.imprime();