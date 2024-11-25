import * as rsl from "readline-sync";

export class Tragamonedas {
  reels: string[] = ["🍒", "🍋", "🍉", "🍇", "🍌"];
  combinacionGanadora: string[];

  constructor() {
    this.combinacionGanadora = ["🍒", "🍒", "🍒"];
  }

  jugar(): void {
    console.log("¡Jugando al tragamonedas!");
  }

  getRandom(): number {
    return Math.floor(Math.random() * this.reels.length);
  }

  realizarApuesta(monto: number): void {
    if (monto) {
      let resultado = [
        this.reels[this.getRandom()],
        this.reels[this.getRandom()],
        this.reels[this.getRandom()],
      ];
      console.log("Resultado:", resultado);
      this.resultado(resultado, monto);
    }
    let teclaParaAvanzar: string = rsl.question(
      " Presione ENTER para retornar al MENU PRINCIPAL "
    );
  }

  resultado(resultado: string[][] | string[], monto: number): void {
    if (
      JSON.stringify(resultado) === JSON.stringify(this.combinacionGanadora)
    ) {
      let premio = monto * 10;
      console.log(`Ganaste ${premio}`);
    } else {
      console.log(`Perdiste ${monto}`);
    }
  }
}