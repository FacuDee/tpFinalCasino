import   * as rsl from "readline-sync"

export class Craps {

  private saldo: number ;
  private apuesta: number;

  constructor (saldo:number, apuesta:number){
      this.saldo=saldo;
      this.apuesta=apuesta;
  }

  public getsaldo() : number {
    return this.saldo;
  }

  public setsaldo(saldo : number) {
    this.saldo = saldo;
  }

  public getapuesta() : number {
    return this.apuesta;
  }

  public setapuesta(apuesta : number) {
    this.apuesta = apuesta;
  }

  public arrojarDados(): number {
    let dado1: number = Math.floor(Math.random() * 6) + 1;
    console.log("Primer DADO sale ", dado1);
    let dado2: number = Math.floor(Math.random() * 6) + 1;
    console.log("Segundo DADO sale ", dado2);
    let resultado: number;
    resultado = dado1 + dado2;
    return resultado;
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

  public validarApuesta(){

    let eleccionApuesta :number = parseInt(rsl.question("Cuanto desea apostar?? : "),10);
    while (eleccionApuesta < 5  || eleccionApuesta > this.getsaldo()   ){ // mayor a saldo y mayor que apuesta minima 5
      console.log("Ingrese nuevamente la puesta debe ser menor al saldo y mayor a 5 (apuesta Minima)");
      eleccionApuesta  = parseInt(rsl.question("Cuanto desea apostar?? : "), 10);
    }
    this.setapuesta(eleccionApuesta);
  }

  jugarCraps (){
    console.log("Saldo inicial: ", this.getsaldo());
    this.validarApuesta();
    let ganancia: number = this.comenzarjugo(this.getapuesta());
    let nuevoSaldo= this.getsaldo() - this.getapuesta() + ganancia;
    this.setsaldo(nuevoSaldo);
    console.log("Saldo final: ", this.getsaldo());
    let teclaParaAbanzar :string = rsl.question(" Presione ENTER para retornar al MENU PRINCIPAL ");
  }
}