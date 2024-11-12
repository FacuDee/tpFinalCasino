"use strict"
import   * as rsl from "readline-sync"
import { Craps } from "./Dados";

let clientePrueba: Craps =new Craps (100,5);


function menuJuegos(){
        //console.clear();//Limpiamos la pantalla para el menu Principal
        console.log("***************************************************************************************************");
        console.log("****************************************************************************************************");
        console.log("**                                                                                                **")
        console.log("**   *****    **    *****   **     **   **       **   *****    **   **    **    ****      ****    **");
        console.log("**   **   *   **    **      ** *   **    **     **    **       ***  **    **    **  **   **  **   **");
        console.log("**   *****    **    ****    **   * **     **   **     ****     ** * **    **    **  **   **  **   **");
        console.log("**   **   *   **    **      **    ***      ** **      **       **  ***    **    **  **   **  **   **");
        console.log("**   *****    **    *****   **     **       ***       *****    **   **    **    ****      ****    **");
        console.log("**                                                                                                **")
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


function validarEleccion( ):number{// Se valida la elecccion de juego
    let selecJuego :number = parseInt(rsl.question("Seleccione el juego Deseado : "), 10);
    while(selecJuego<0 || selecJuego>5 || selecJuego==undefined ){
        console.log("La seleccion es invalido");
        let reValidarJuego :number = parseInt(rsl.question("Seleccione nuevamente el juego Deseado : "), 10);
        selecJuego=reValidarJuego;
    }return selecJuego
}

function Juegar (clientePrueba:Craps){
    menuJuegos();
    
    let seleccion: number =validarEleccion(); //Se llama a la eleccion de juego y validacion
   
    while (seleccion!=0){
        if (seleccion==1){
            console.log(" jugarTragamonedas3T() ");
        }else if (seleccion==2){
            console.log(" jugarTragamonedas6T() ");
        }else if (seleccion==3){
            clientePrueba.jugarCraps();
        }else if (seleccion==4){
            console.log(" jugarBlackJack() ");
        }else {
            console.log(" jugarRuleta() ");
        }
        // Al finalizar el juego se muestra el menu para poder jugar otro juego.
        menuJuegos();
        seleccion =validarEleccion(); //Se llama a la eleccion de juego y validacion
    }
}

Juegar(clientePrueba);

