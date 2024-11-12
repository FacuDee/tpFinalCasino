"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Craps = void 0;
var rsl = require("readline-sync");
var Craps = /** @class */ (function () {
    function Craps(saldo, apuesta) {
        this.saldo = saldo;
        this.apuesta = apuesta;
    }
    Craps.prototype.getsaldo = function () {
        return this.saldo;
    };
    Craps.prototype.setsaldo = function (saldo) {
        this.saldo = saldo;
    };
    Craps.prototype.getapuesta = function () {
        return this.apuesta;
    };
    Craps.prototype.setapuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    Craps.prototype.arrojarDados = function () {
        var dado1 = Math.floor(Math.random() * 6) + 1;
        console.log("Primer DADO sale ", dado1);
        var dado2 = Math.floor(Math.random() * 6) + 1;
        console.log("Segundo DADO sale ", dado2);
        var resultado;
        resultado = dado1 + dado2;
        return resultado;
    };
    Craps.prototype.comenzarjugo = function (apuesta) {
        var resultado1;
        resultado1 = this.arrojarDados();
        if (resultado1 == 7 || resultado1 == 11) {
            console.log("El resultado es: ", resultado1);
            apuesta = apuesta * 1.5; // para ajustar
            console.log("Felicitaciones, Natural, Ha Ganado en el Primer tiro ", apuesta, " $");
            console.log("Duplicas la Apuesta ");
        }
        else if (resultado1 == 2 || resultado1 == 3 || resultado1 == 12) {
            apuesta = 0;
            console.log("El resultado es: ", resultado1);
            console.log("Craps, Ha Perdido el juego ");
        }
        else {
            // Inicia el siclo POINT
            var resultado2 = void 0;
            resultado2 = 1;
            console.log("Establece un POINT, con el resultado ", resultado1, ", tira nuevamente: ");
            while (resultado2 != resultado1 && resultado2 != 7) {
                var teclaParaAbanzar = rsl.question(" Presione ENTER para Continuar ");
                resultado2 = this.arrojarDados();
                if (resultado1 == resultado2) {
                    apuesta = apuesta * 1.2;
                    console.log("HA GANADO :", apuesta, " ya que el primer tiro :", resultado1, " es igual al nuevo tiro :", resultado2, " es POINT ");
                }
                else if (resultado2 != 7) {
                    console.log("El Point es :", resultado1);
                    console.log("La suma de los dados es ", resultado2, " no coinciden, tira nuevamente: ");
                }
                else {
                    console.log("Ha Perdido el juego, ya que Sacaste ", resultado2, " Seven Out ");
                    apuesta = 0;
                }
            }
        }
        return apuesta;
    };
    Craps.prototype.validarApuesta = function () {
        var eleccionApuesta = parseInt(rsl.question("Cuanto desea apostar?? : "), 10);
        while (eleccionApuesta < 5 || eleccionApuesta > this.getsaldo()) { // mayor a saldo y mayor que apuesta minima 5
            console.log("Ingrese nuevamente la puesta debe ser menor al saldo y mayor a 5 (apuesta Minima)");
            eleccionApuesta = parseInt(rsl.question("Cuanto desea apostar?? : "), 10);
        }
        this.setapuesta(eleccionApuesta);
    };
    Craps.prototype.jugarCraps = function () {
        console.log("Saldo inicial: ", this.getsaldo());
        this.validarApuesta();
        var ganancia = this.comenzarjugo(this.getapuesta());
        var nuevoSaldo = this.getsaldo() - this.getapuesta() + ganancia;
        this.setsaldo(nuevoSaldo);
        console.log("Saldo final: ", this.getsaldo());
        var teclaParaAbanzar = rsl.question(" Presione ENTER para retornar al MENU PRINCIPAL ");
    };
    return Craps;
}());
exports.Craps = Craps;
