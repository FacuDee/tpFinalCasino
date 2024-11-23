"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var rsl = require("readline-sync");
var Jugador_1 = require("./Jugador");
var Tragamonedas_1 = require("./Tragamonedas");
var Casino = /** @class */ (function () {
    function Casino(arrJugadores, arrJuegos) {
        this.arrJugadores = arrJugadores;
        this.arrJuegos = arrJuegos;
    }
    Casino.prototype.getArrJugadores = function () {
        return this.arrJugadores;
    };
    Casino.prototype.setArrJugadores = function (arrJugadores) {
        this.arrJugadores = arrJugadores;
    };
    Casino.prototype.getArrJuegos = function () {
        return this.arrJuegos;
    };
    Casino.prototype.setArrJuegos = function (arrJuegos) {
        this.arrJuegos = arrJuegos;
    };
    //***************** Metodos Para Juegos ************************* */
    Casino.prototype.agregarJuego = function (juego) {
        this.arrJuegos.push(juego);
    };
    //*************** Metodos Para Gestion de Jugadores ******************** */
    Casino.prototype.nuevoJugador = function () {
        console.log("");
        console.log("------ Bienvenido al Alta Del Casino ---------");
        var nombre = rsl.question("Ingrese Nombre :");
        var fichas = rsl.question("Ingrese Monto en Fichas :");
        var nuevoJugador = new Jugador_1.Jugador(nombre, fichas);
        this.arrJugadores.push(nuevoJugador);
        return nuevoJugador;
    };
    Casino.prototype.seleccionJugador = function () {
        console.log(" Secciones Nombre del jugador ");
        console.log(this.arrJugadores);
        var nombreUsuario = rsl.question("Ingrese Nombre de Usuario o enter para cargar usuario nuevo :");
        var jugadorFiltrado = this.getArrJugadores().filter(function (c) { return c.getnombre() === nombreUsuario; });
        //filter devuelve elementos que cumplen la condicion
        var jugador = jugadorFiltrado.length > 0 ? jugadorFiltrado[0] : undefined;
        if (!jugador) {
            console.log(" Jugador no encontrado. se dara alta uno Nuevo");
            var jugador_1 = this.nuevoJugador();
            return jugador_1;
        }
        else {
            return jugador;
        }
    };
    //*****************Metodo Prara Seleccion De Juegos ******************************* */
    Casino.prototype.mostrarMenu = function () {
        console.log("***************************************************************************************************");
        console.log("****************************************************************************************************");
        console.log("**                                                                                                **");
        console.log("**   *****    **    *****   **     **   **       **   *****    **   **    **    ****      ****    **");
        console.log("**   **   *   **    **      ** *   **    **     **    **       ***  **    **    **  **   **  **   **");
        console.log("**   *****    **    ****    **   * **     **   **     ****     ** * **    **    **  **   **  **   **");
        console.log("**   **   *   **    **      **    ***      ** **      **       **  ***    **    **  **   **  **   **");
        console.log("**   *****    **    *****   **     **       ***       *****    **   **    **    ****      ****    **");
        console.log("**                                                                                                **");
        console.log("**                 ******      ********        ****.      ****      **     **      ****           **");
        console.log("**   A            **           **    **       **           **       ** **  **     **  **          **");
        console.log("**       EL       **           ********          *         **       **  ** **     **  **          **");
        console.log("**                **           **    **       .   **       **       **   ****     **  **          **");
        console.log("**                 ******      **    **        ****       ****      **     **      ****           **");
        console.log("**                                                                                                **");
        console.log("**      Seleccione EL Juego Deseado:                                                              **");
        console.log("**                                                                                                **");
        console.log("**      1. Tragamonedas (3 Tambores)                   2.Tragamonedas (6 Tambores)                **");
        console.log("**                                                                                                **");
        console.log("**      3. Craps (Dados)                              4. Black Jack                               **");
        console.log("**                                                                                                **");
        console.log("**      5. Ruleta                                     0.Si desea Salir                            **");
        console.log("**                                                                                                **");
        console.log("****************************************************************************************************");
        console.log("****************************************************************************************************");
    };
    Casino.prototype.validarEleccion = function () {
        // Se valida la elecccion de juego entre 0 p/salir y 5
        var selecJuego = parseInt(rsl.question("Seleccione el juego Deseado : "), 10);
        while (selecJuego < 0 || selecJuego > 5 || selecJuego == undefined) {
            console.log("La seleccion es invalido");
            var reValidarJuego = parseInt(rsl.question("Seleccione nuevamente el juego Deseado : "), 10);
            selecJuego = reValidarJuego;
        }
        return selecJuego;
    };
    Casino.prototype.menuDeJuegos = function () {
        var jugadorSeleccionado = this.seleccionJugador();
        this.mostrarMenu();
        var seleccion = this.validarEleccion(); //Se llama a la eleccion de juego y validacion
        while (seleccion != 0) {
            if (seleccion == 1) {
                var tragamonedas = new Tragamonedas_1.Tragamonedas();
                tragamonedas.jugar();
                tragamonedas.resultado(["Facu"], 400);
                //jugadorSeleccionado.jugar();
                //jugadorSeleccionado.resultado();
            }
            else if (seleccion == 2) {
                console.log(" jugarTragamonedas6T() ");
            }
            else if (seleccion == 3) {
                this.arrJuegos[0].getMiniInstruccion();
                this.arrJuegos[0].jugar(jugadorSeleccionado);
            }
            else if (seleccion == 4) {
                console.log(" jugarBlackJack() ");
            }
            else {
                console.log(" jugarRuleta() ");
            }
            // Al finalizar el juego se muestra el menu para poder jugar otro juego.
            this.mostrarMenu();
            seleccion = this.validarEleccion(); //Se llama a la eleccion de juego y validacion
        }
    };
    return Casino;
}());
exports.Casino = Casino;
