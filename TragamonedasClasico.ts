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
    let apuesta = parseInt(rsl.question("Ingrese su apuesta: "), 10);
    if (isNaN(apuesta) || apuesta < this.apuestaMinima) {
      console.log(`La apuesta mínima es ${this.apuestaMinima}`);
      return;
    }
    this.realizarApuesta(apuesta);
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
