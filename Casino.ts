import * as rsl from "readline-sync";
import { JuegoCasino } from "./JuegoCasino";
import { Jugador } from "./Jugador";
import { Dados } from "./Dados";

import { Tragamonedas } from "./Tragamonedas";

export class Casino {
    private arrJugadores: Jugador[];
    private arrJuegos: JuegoCasino[];

    constructor(arrJugadores:Jugador[],arrJuegos:JuegoCasino[]) {
      this.arrJugadores=arrJugadores;
      this.arrJuegos=arrJuegos;
    }
  
    public getArrJugadores(): Jugador[] {
        return this.arrJugadores;
    }

    public setArrJugadores(arrJugadores: Jugador[]): void {
        this.arrJugadores = arrJugadores;
    }

    public getArrJuegos(): JuegoCasino[] {
        return this.arrJuegos;
    }

    public setArrJuegos(arrJuegos: JuegoCasino[]): void {
        this.arrJuegos = arrJuegos;
    }
    
    //***************** Metodos Para Juegos ************************* */

    agregarJuego(juego: JuegoCasino): void {
        this.arrJuegos.push(juego);
    }

    //*************** Metodos Para Gestion de Jugadores ******************** */

    nuevoJugador():Jugador{
        console.log("");
        console.log("------ Bienvenido al Alta Del Casino ---------");
        let nombre: string = rsl.question("Ingrese Nombre :");
        let fichas: number = rsl.question("Ingrese Monto en Fichas :");
        let nuevoJugador: Jugador = new Jugador(nombre, fichas);
        this.arrJugadores.push(nuevoJugador);
        return nuevoJugador;
    }

    seleccionJugador():Jugador{
        console.log(" Secciones Nombre del jugador ");
        console.log(this.arrJugadores);
        let nombreUsuario: string = rsl.question("Ingrese Nombre de Usuario o enter para cargar usuario nuevo :");
        const jugadorFiltrado =this.getArrJugadores().filter(c => c.getnombre() ===nombreUsuario);
        //filter devuelve elementos que cumplen la condicion
        const jugador = jugadorFiltrado.length >0 ? jugadorFiltrado[0]:undefined;
        if (!jugador) {
            console.log(" Jugador no encontrado. se dara alta uno Nuevo");
            const jugador: Jugador = this.nuevoJugador();
            return jugador;
        }else{
            return jugador;
        }    
    }
    
    //*****************Metodo Prara Seleccion De Juegos ******************************* */

    mostrarMenu() {
        console.log(    "***************************************************************************************************"  );
        console.log(    "****************************************************************************************************"  );
        console.log(    "**                                                                                                **"  );
        console.log(    "**   *****    **    *****   **     **   **       **   *****    **   **    **    ****      ****    **"  );
        console.log(    "**   **   *   **    **      ** *   **    **     **    **       ***  **    **    **  **   **  **   **"  );
        console.log(    "**   *****    **    ****    **   * **     **   **     ****     ** * **    **    **  **   **  **   **"  );
        console.log(    "**   **   *   **    **      **    ***      ** **      **       **  ***    **    **  **   **  **   **"  );
        console.log(    "**   *****    **    *****   **     **       ***       *****    **   **    **    ****      ****    **"  );
        console.log(    "**                                                                                                **"  );
        console.log(    "**                 ******      ********        ****.      ****      **     **      ****           **"  );
        console.log(    "**   A            **           **    **       **           **       ** **  **     **  **          **"  );
        console.log(    "**       EL       **           ********          *         **       **  ** **     **  **          **"  );
        console.log(    "**                **           **    **       .   **       **       **   ****     **  **          **"  );
        console.log(    "**                 ******      **    **        ****       ****      **     **      ****           **"  );
        console.log(    "**                                                                                                **"  );
        console.log(    "**      Seleccione EL Juego Deseado:                                                              **"  );
        console.log(    "**                                                                                                **"  );
        console.log(    "**      1. Tragamonedas (3 Tambores)                   2.Tragamonedas (6 Tambores)                **"  );
        console.log(    "**                                                                                                **"  );
        console.log(    "**      3. Craps (Dados)                              4. Black Jack                               **"  );
        console.log(    "**                                                                                                **"  );
        console.log(    "**      5. Ruleta                                     0.Si desea Salir                            **"  );
        console.log(    "**                                                                                                **"  );
        console.log(    "****************************************************************************************************"  );
        console.log(    "****************************************************************************************************"  );}
      
    validarEleccion(): number {
        // Se valida la elecccion de juego entre 0 p/salir y 5
        let selecJuego: number = parseInt( rsl.question("Seleccione el juego Deseado : "),10 );
        while (selecJuego < 0 || selecJuego > 5 || selecJuego == undefined) {
          console.log("La seleccion es invalido");
          let reValidarJuego: number = parseInt( rsl.question("Seleccione nuevamente el juego Deseado : "), 10 );
          selecJuego = reValidarJuego;
        }
        return selecJuego;
      }
      
     menuDeJuegos() {
        const jugadorSeleccionado =this.seleccionJugador();
        this.mostrarMenu();
        let seleccion: number = this.validarEleccion(); //Se llama a la eleccion de juego y validacion
        while (seleccion != 0) {
          if (seleccion == 1) {
            const tragamonedas: Tragamonedas = new Tragamonedas()
            tragamonedas.jugar();
            tragamonedas.resultado(["Facu"],400);
            //jugadorSeleccionado.jugar();
            //jugadorSeleccionado.resultado();
          } else if (seleccion == 2) {
            console.log(" jugarTragamonedas6T() ");
          } else if (seleccion == 3) {
            this.arrJuegos[0].getMiniInstruccion();
            this.arrJuegos[0].jugar(jugadorSeleccionado);
          } else if (seleccion == 4) {
            console.log(" jugarBlackJack() ");
          } else {
            console.log(" jugarRuleta() ");
          }
          // Al finalizar el juego se muestra el menu para poder jugar otro juego.
          this.mostrarMenu();
          seleccion = this.validarEleccion(); //Se llama a la eleccion de juego y validacion
        }
      }

}