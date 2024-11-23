var Ruleta = /** @class */ (function () {
    function Ruleta(saldo, apuesta, numeroApostado) {
        this.saldo = saldo;
        this.apuesta = apuesta;
        this.numeroApostado = numeroApostado;
    }
    Ruleta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Ruleta.prototype.setSaldo = function (NuevoSaldo) {
        this.saldo = NuevoSaldo;
    };
    Ruleta.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Ruleta.prototype.setApuesta = function (NuevaApuesta) {
        this.apuesta = NuevaApuesta;
    };
    Ruleta.prototype.getNumero = function () {
        return this.numeroApostado;
    };
    Ruleta.prototype.setNumero = function (nuevoNumero) {
        this.numeroApostado = nuevoNumero;
    };
    Ruleta.prototype.Apostar = function () {
        if (this.apuesta > this.saldo) {
            console.log("No tiene suficiente saldo para apostar");
        }
        else {
            console.log("Haz apostado ".concat(this.apuesta, " al numero ").concat(this.numeroApostado));
        }
    };
    Ruleta.prototype.GirarRuleta = function () {
        var numero = Math.floor(Math.random() * 37);
        var numerosColorados = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        console.log("Ha salido el: ".concat(numero));
        if (numerosColorados.includes(numero)) {
            console.log("Colorado");
        }
        else {
            console.log("Negro");
        }
        if (numero % 2 === 0) {
            console.log("Par");
        }
        else {
            console.log("Impar");
        }
        if (numero >= 1 && numero <= 18) {
            console.log("Menor");
        }
        else {
            console.log("Mayor");
        }
        return numero;
    };
    Ruleta.prototype.resultadoApuesta = function () {
        var numeroGanador = this.GirarRuleta();
        if (numeroGanador === this.numeroApostado) {
            var ganancia = this.apuesta * 35;
            this.saldo += ganancia;
            console.log("Acertaste! ".concat(numeroGanador, ". Has ganado ").concat(ganancia, "."));
        }
        else {
            this.saldo -= this.apuesta;
            console.log(" No acertaste. Tu nuevo saldo es ".concat(this.saldo, "."));
        }
        if (this.saldo <= 0) {
            console.log("No tienes más saldo para jugar");
        }
    };
    return Ruleta;
}());
var Ruleta1 = new Ruleta(10000, 1000, 7);
Ruleta1.Apostar();
Ruleta1.resultadoApuesta();