import { Tragamonedas } from "./Tragamonedas";
import * as rsl from "readline-sync";

export class TragamonedasPlus extends Tragamonedas {
  apuestaMinima = 20;
  constructor() {
    super();
    this.apuestaMinima = this.apuestaMinima;
  }

  jugar(): void {
    console.log("¡Bienvenido al Tragamonedas Plus!");
    let apuesta = parseInt(rsl.question("Ingrese su apuesta: "), 10);
    if (isNaN(apuesta) || apuesta < this.apuestaMinima) {
      console.log(`La apuesta mínima es ${this.apuestaMinima}`);
      return;
    }
    this.realizarApuesta(apuesta);
  }

  realizarApuesta(monto: number): void {
    if (monto) {
      let resultado1 = [
        this.reels[this.getRandom()],
        this.reels[this.getRandom()],
        this.reels[this.getRandom()],
      ];
      let resultado2 = [
        this.reels[this.getRandom()],
        this.reels[this.getRandom()],
        this.reels[this.getRandom()],
      ];
      console.log("Resultado 1:", resultado1);
      console.log("Resultado 2:", resultado2);
      this.resultado([resultado1, resultado2], monto);
    }
    rsl.question("Presione ENTER para retornar al MENU PRINCIPAL.");
  }

  resultado(resultado: string[] | string[][], monto: number): void {
    if (Array.isArray(resultado[0])) {
      // Caso para TragamonedasPlus
      const resultados = resultado as string[][];
      const esGanador = resultados.some(
        (res) =>
          JSON.stringify(res) === JSON.stringify(this.combinacionGanadora)
      );

      if (esGanador) {
        let premio = monto * 15;
        console.log(`¡Ganaste ${premio} fichas`);
      } else {
        console.log(`Perdiste ${monto} fichas.`);
      }
    } else {
      // Caso para Tragamonedas y TragamonedasClasico
      const resultadoSimple = resultado as string[];
      if (
        JSON.stringify(resultadoSimple) ===
        JSON.stringify(this.combinacionGanadora)
      ) {
        let premio = monto * 10;
        console.log(`¡Ganaste ${premio} fichas!`);
      } else {
        console.log(`Perdiste ${monto} fichas.`);
      }
    }
  }
}
