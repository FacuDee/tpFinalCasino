"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dados = void 0;
var rsl = require("readline-sync");
var JuegoCasino_1 = require("./JuegoCasino");
var Dados = /** @class */ (function (_super) {
    __extends(Dados, _super);
    function Dados(nombre, apuestaMin, miniInstruccion, dado1, dado2, apuesta) {
        var _this = _super.call(this, nombre, apuestaMin, miniInstruccion) || this;
        _this.dado1 = dado1;
        _this.dado2 = dado2;
        _this.apuesta = apuesta;
        return _this;
    }
    Dados.prototype.getdado1 = function () {
        return this.dado1;
    };
    Dados.prototype.setdado1 = function (dado1) {
        this.dado1 = dado1;
    };
    Dados.prototype.getdado2 = function () {
        return this.dado2;
    };
    Dados.prototype.setdado2 = function (dado2) {
        this.dado2 = dado2;
    };
    Dados.prototype.getapuesta = function () {
        return this.apuesta;
    };
    Dados.prototype.setapuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    Dados.prototype.arrojarDados = function () {
        this.setdado1(Math.floor(Math.random() * 6) + 1);
        console.log("Primer DADO sale ", this.getdado1());
        this.setdado2(Math.floor(Math.random() * 6) + 1);
        console.log("Segundo DADO sale ", this.getdado2());
        var resultado = this.getdado1() + this.getdado2();
        return resultado;
    };
    Dados.prototype.Resultado = function () {
    };
    Dados.prototype.comenzarjugo = function (apuesta) {
        var resultado1;
        resultado1 = this.arrojarDados();
        if (resultado1 == 7 || resultado1 == 11) {
            console.log("El resultado es: ", resultado1);
            apuesta = Math.floor(apuesta * 1.5); // para ajustar
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
                    apuesta = Math.floor(apuesta * 1.2);
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
    Dados.prototype.validarApuesta = function (saldo) {
        var eleccionApuesta = parseInt(rsl.questionInt("Cuanto desea apostar?? : "), 10);
        while (eleccionApuesta < this.apuestaMin || eleccionApuesta > saldo) { // mayor a saldo y mayor que apuesta minima 5
            console.log("Ingrese nuevamente la puesta debe ser menor al saldo y mayor a 5 (apuesta Minima)");
            eleccionApuesta = parseInt(rsl.question("Cuanto desea apostar?? : "), 10);
        }
        this.setapuesta(eleccionApuesta);
    };
    //**************** Comienzo juego   ***************** */
    Dados.prototype.jugar = function (jugador) {
        console.log("Saldo inicial: ", jugador.getfichas());
        this.validarApuesta(jugador.getfichas()); //Pasamos Saldo por parametro
        var ganancia = this.comenzarjugo(jugador.getfichas());
        var nuevoSaldo = jugador.getfichas() - this.getapuesta() + ganancia;
        jugador.setfichas(nuevoSaldo);
        console.log("Saldo final: ", jugador.getfichas());
        this.resultado();
    };
    Dados.prototype.resultado = function () {
        var teclaParaAbanzar = rsl.question(" Presione ENTER para retornar al MENU PRINCIPAL ");
    };
    return Dados;
}(JuegoCasino_1.JuegoCasino));
exports.Dados = Dados;
