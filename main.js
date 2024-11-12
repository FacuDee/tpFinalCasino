"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rsl = require("readline-sync");
var Dados_1 = require("./Dados");
var clientePrueba = new Dados_1.Craps(100, 5);
function menuJuegos() {
    //console.clear();//Limpiamos la pantalla para el menu Principal
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
}
function validarEleccion() {
    var selecJuego = parseInt(rsl.question("Seleccione el juego Deseado : "), 10);
    while (selecJuego < 0 || selecJuego > 5 || selecJuego == undefined) {
        console.log("La seleccion es invalido");
        var reValidarJuego = parseInt(rsl.question("Seleccione nuevamente el juego Deseado : "), 10);
        selecJuego = reValidarJuego;
    }
    return selecJuego;
}
function Juegar(clientePrueba) {
    menuJuegos();
    var seleccion = validarEleccion(); //Se llama a la eleccion de juego y validacion
    while (seleccion != 0) {
        if (seleccion == 1) {
            console.log(" jugarTragamonedas3T() ");
        }
        else if (seleccion == 2) {
            console.log(" jugarTragamonedas6T() ");
        }
        else if (seleccion == 3) {
            clientePrueba.jugarCraps();
        }
        else if (seleccion == 4) {
            console.log(" jugarBlackJack() ");
        }
        else {
            console.log(" jugarRuleta() ");
        }
        // Al finalizar el juego se muestra el menu para poder jugar otro juego.
        menuJuegos();
        seleccion = validarEleccion(); //Se llama a la eleccion de juego y validacion
    }
}
Juegar(clientePrueba);
