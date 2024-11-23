import   * as rsl from "readline-sync"
import { JuegoCasino } from "./JuegoCasino";
import { Jugador } from "./Jugador";

export class Dados extends JuegoCasino{

  private dado1: number ;
  private dado2: number;
  private apuesta: number;

  constructor (nombre: string, apuestaMin: number, miniInstruccion: string, dado1:number, dado2:number, apuesta:number){
    super(nombre, apuestaMin , miniInstruccion);
      this.dado1=dado1;
      this.dado2=dado2;
      this.apuesta=apuesta;
  }

  public getdado1() : number {
    return this.dado1;
  }

  public setdado1(dado1 : number) {
    this.dado1 = dado1;
  }

  public getdado2() : number {
    return this.dado2;
  }

  public setdado2(dado2 : number) {
    this.dado2 = dado2;
  }
 
  public getapuesta() : number {
    return this.apuesta;
  }
  
  public setapuesta(apuesta : number) {
    this.apuesta = apuesta;
  }
  

  public arrojarDados(): number {
    this.setdado1( Math.floor(Math.random() * 6) + 1);
    console.log("Primer DADO sale ", this.getdado1());
    this.setdado2( Math.floor(Math.random() * 6) + 1);
    console.log("Segundo DADO sale ", this.getdado2());
    let resultado :number = this.getdado1() + this.getdado2();
    return resultado;
  }

  Resultado(){

  }


  public comenzarjugo(apuesta: number): number {
    let resultado1: number;
    resultado1= this.arrojarDados();
    if (resultado1 == 7 || resultado1 == 11) {
      console.log("El resultado es: ", resultado1);
      apuesta = apuesta * 1.5; // para ajustar
      console.log("Felicitaciones, Natural, Ha Ganado en el Primer tiro ", apuesta," $");
      console.log("Duplicas la Apuesta ");
    } else if (resultado1 == 2 || resultado1 == 3 || resultado1 == 12) {
      apuesta = 0;
      console.log("El resultado es: ", resultado1);
      console.log("Craps, Ha Perdido el juego ");
    } else {
      // Inicia el siclo POINT
      let resultado2: number;
      resultado2=1;
      console.log("Establece un POINT, con el resultado ",resultado1,", tira nuevamente: ");
      while (resultado2 != resultado1 && resultado2 != 7) {
        let teclaParaAbanzar :string = rsl.question(" Presione ENTER para Continuar ");
        resultado2 = this.arrojarDados();

        if (resultado1 == resultado2) {
          apuesta = apuesta * 1.2;
          console.log("HA GANADO :",apuesta," ya que el primer tiro :",resultado1," es igual al nuevo tiro :",resultado2," es POINT " );
        } else if (resultado2 != 7) {
          console.log("El Point es :",resultado1);
          console.log("La suma de los dados es ",resultado2," no coinciden, tira nuevamente: ");
          
        } else {
          console.log("Ha Perdido el juego, ya que Sacaste ",resultado2," Seven Out ");
          apuesta = 0;
        }
      }
    }
    return apuesta;
  }

  public validarApuesta(saldo:number){
    let eleccionApuesta :number = parseInt(rsl.question("Cuanto desea apostar?? : "),10);
    while (eleccionApuesta < this.apuestaMin  || eleccionApuesta > saldo   ){ // mayor a saldo y mayor que apuesta minima 5
      console.log("Ingrese nuevamente la puesta debe ser menor al saldo y mayor a 5 (apuesta Minima)");
      eleccionApuesta  = parseInt(rsl.question("Cuanto desea apostar?? : "), 10);
    }
    this.setapuesta(eleccionApuesta);
  }
 //**************** Comienzo juego   ***************** */
  jugar (jugador:Jugador){
    console.log("Saldo inicial: ", jugador.getfichas());
    this.apuestaMin =10;
    this.validarApuesta(jugador.getfichas());//Pasamos Saldo por parametro
    let ganancia: number = this.comenzarjugo(jugador.getfichas());
    let nuevoSaldo= jugador.getfichas() - this.getapuesta() + ganancia;
    jugador.setfichas(nuevoSaldo);
    console.log("Saldo final: ", jugador.getfichas());
    this.resultado();
  }

  resultado(): void {
    let teclaParaAbanzar :string = rsl.question(" Presione ENTER para retornar al MENU PRINCIPAL ");
  }

}