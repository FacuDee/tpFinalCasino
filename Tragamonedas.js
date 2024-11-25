"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
var rsl = require("readline-sync");
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas() {
        this.reels = ["🍒", "🍋", "🍉", "🍇", "🍌"];
        this.combinacionGanadora = ["🍒", "🍒", "🍒"];
    }
    Tragamonedas.prototype.jugar = function () {
        console.log("¡Jugando al tragamonedas!");
    };
    Tragamonedas.prototype.getRandom = function () {
        return Math.floor(Math.random() * this.reels.length);
    };
    Tragamonedas.prototype.realizarApuesta = function (monto) {
        if (monto) {
            var resultado = [
                this.reels[this.getRandom()],
                this.reels[this.getRandom()],
                this.reels[this.getRandom()],
            ];
            console.log("Resultado:", resultado);
            this.resultado(resultado, monto);
        }
        var teclaParaAvanzar = rsl.question(" Presione ENTER para retornar al MENU PRINCIPAL ");
    };
    Tragamonedas.prototype.resultado = function (resultado, monto) {
        if (JSON.stringify(resultado) === JSON.stringify(this.combinacionGanadora)) {
            var premio = monto * 10;
            console.log("Ganaste ".concat(premio));
        }
        else {
            console.log("Perdiste ".concat(monto));
        }
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
