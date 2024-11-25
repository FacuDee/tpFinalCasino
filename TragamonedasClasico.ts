import { Tragamonedas } from "./Tragamonedas";
import * as rsl from "readline-sync";

export class TragamonedasClasico extends Tragamonedas {
  apuestaMinima = 10;
  constructor() {
    super();
    this.apuestaMinima = this.apuestaMinima;
  }

  jugar(): void {
    console.log("¡Bienvenido al Tragamonedas Clásico!");
    let apuesta: number;

    while (true) {
      apuesta = parseInt(rsl.question("Ingrese su apuesta: "));

      if (!isNaN(apuesta) && apuesta >= this.apuestaMinima) {
        break; // Salir del bucle si la apuesta es válida
      }

      console.log(
        `La apuesta mínima es ${this.apuestaMinima}. Intente nuevamente.`
      );
    }

    // Realiza la apuesta y sigue con el juego
    this.realizarApuesta(apuesta);
    rsl.question("Presione ENTER para retornar al MENU PRINCIPAL.");
  }

  resultado(resultado: string[], monto: number): void {
    if (
      JSON.stringify(resultado) === JSON.stringify(this.combinacionGanadora)
    ) {
      let premio = monto * 5; // Factor de multiplicación menor
      console.log(`Ganaste ${premio} fichas.`);
    } else {
      console.log(`Perdiste ${monto} fichas.`);
    }
  }
}
