import * as rsl from "readline-sync";
import { Tragamonedas } from "./Tragamonedas";
import { Jugador } from "./Jugador";
import { JuegoCasino } from "./JuegoCasino";
import { Dados } from "./Dados";
import { BlackJack } from "./blackJack";
import { Ruleta } from "./Ruleta";
import { TragamonedasPlus } from "./TragamonedasPlus";
import { TragamonedasClasico } from "./TragamonedasClasico";

// const arrJugadores: Jugador[] = [
//   new Jugador("Facundo", 400),
//   new Jugador("Lucas", 400),
//   new Jugador("Mayra", 400),
//   new Jugador("Melisa", 400),
//   new Jugador("Maia", 400),
// ];

const jugador1 = new Jugador("Facundo", 100);

const arrJuegos: Tragamonedas[] = [
  new TragamonedasClasico(),
  new TragamonedasPlus(),
];

// // Pruebas e implementación de las clases

let clientePrueba: Jugador = new Jugador("Juan Sosa", 100);

function menuJuegos() {
  //console.clear();//Limpiamos la pantalla para el menu Principal
  console.log(
    "***************************************************************************************************"
  );
  console.log(
    "****************************************************************************************************"
  );
  console.log(
    "**                                                                                                **"
  );
  console.log(
    "**   *****    **    *****   **     **   **       **   *****    **   **    **    ****      ****    **"
  );
  console.log(
    "**   **   *   **    **      ** *   **    **     **    **       ***  **    **    **  **   **  **   **"
  );
  console.log(
    "**   *****    **    ****    **   * **     **   **     ****     ** * **    **    **  **   **  **   **"
  );
  console.log(
    "**   **   *   **    **      **    ***      ** **      **       **  ***    **    **  **   **  **   **"
  );
  console.log(
    "**   *****    **    *****   **     **       ***       *****    **   **    **    ****      ****    **"
  );
  console.log(
    "**                                                                                                **"
  );
  console.log(
    "**                 ******      ********        ****.      ****      **     **      ****           **"
  );
  console.log(
    "**   A            **           **    **       **           **       ** **  **     **  **          **"
  );
  console.log(
    "**       EL       **           ********          *         **       **  ** **     **  **          **"
  );
  console.log(
    "**                **           **    **       .   **       **       **   ****     **  **          **"
  );
  console.log(
    "**                 ******      **    **        ****       ****      **     **      ****           **"
  );
  console.log(
    "**                                                                                                **"
  );
  console.log(
    "**      Seleccione EL Juego Deseado:                                                              **"
  );
  console.log(
    "**                                                                                                **"
  );
  console.log(
    "**      1. Tragamonedas (3 Tambores)                   2.Tragamonedas (6 Tambores)                **"
  );
  console.log(
    "**                                                                                                **"
  );
  console.log(
    "**      3. Craps (Dados)                              4. Black Jack                               **"
  );
  console.log(
    "**                                                                                                **"
  );
  console.log(
    "**      5. Ruleta                                     0.Si desea Salir                            **"
  );
  console.log(
    "**                                                                                                **"
  );
  console.log(
    "****************************************************************************************************"
  );
  console.log(
    "****************************************************************************************************"
  );
}

function validarEleccion(): number {
  // Se valida la elecccion de juego
  let selecJuego: number = parseInt(
    rsl.question("Seleccione el juego Deseado : "),
    10
  );
  while (selecJuego < 0 || selecJuego > 5 || selecJuego == undefined) {
    console.log("La seleccion es invalido");
    let reValidarJuego: number = parseInt(
      rsl.question("Seleccione nuevamente el juego Deseado : "),
      10
    );
    selecJuego = reValidarJuego;
  }
  return selecJuego;
}

function jugar() {
  menuJuegos();

  let seleccion: number = validarEleccion(); //Se llama a la eleccion de juego y validacion

  while (seleccion != 0) {
    if (seleccion == 1) {
      arrJuegos[0].jugar();
      arrJuegos[0].resultado([], 0);
    } else if (seleccion == 2) {
      arrJuegos[1].jugar();
      arrJuegos[1].resultado([], 0);
    } else if (seleccion == 3) {
      arrJuegos[2].jugar();
    } else if (seleccion == 4) {
      console.log(" jugarBlackJack() ");
    } else {
      console.log(" jugarRuleta() ");
    }
    // Al finalizar el juego se muestra el menu para poder jugar otro juego.
    menuJuegos();
    seleccion = validarEleccion(); //Se llama a la eleccion de juego y validacion
  }
}

jugar();
