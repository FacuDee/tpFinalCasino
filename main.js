"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Casino_1 = require("./Casino");
var Tragamonedas_1 = require("./Tragamonedas");
var Jugador_1 = require("./Jugador");
var Dados_1 = require("./Dados");
//import { BlackJack } from "./blackJack";
//import { Ruleta } from "./Ruleta";
//import { TragamonedasPlus } from "./TragamonedasPlus";
var arrJugadores = [
    new Jugador_1.Jugador("Facundo", 400),
    new Jugador_1.Jugador("Lucas", 400),
    new Jugador_1.Jugador("Mayra", 400),
    new Jugador_1.Jugador("Melisa", 400),
    new Jugador_1.Jugador("Maia", 400),
];
var dados = new Dados_1.Dados("Dados", 10, "Natural, gana sacando 7 u 11 en el primer tiro. Craps pierde si saca 2,3 u 12 en el primer tiro.. sino tira hasta que repita el prumer tiro' Gana' o saque 7 y pierde lo que suceda primero", 0, 0, 0);
var tragamonedas = new Tragamonedas_1.Tragamonedas(); //("Tragamonedas",5, "Se arroja la palanca si saca 🍒🍒🍒 Gana el juego");
//const Ruleta: Ruleta = new Ruleta("Ruleta",10, "En un tablero de 36 numeros, repartidos entre rojos, Negros y 0 verde, elige un numero o color, si acierta Gana");
//const tragamonedasPlus: Tragamonedas = new Tragamonedas("Tragamonedas",10, "Se arroja la palanca si saca, tres rolos con 🍒🍒🍒 Gana el juego");
//const blackJack: BlackJack  = new BlackJack("Black Jack",9, "Se arrojan cartas las cartas valen su numeracion, A vale 1 u 11 y (J,Q,K) valen 10, Debe tratar de sumar lo mas cerca posible a 21, Si sepasa Pierde, si esta mas Cerca Que la Casa GANA  )
var arrJuegos = [];
arrJuegos.push(dados);
//arrJuegos.push(tragamonedas);
//arrJuegos.push(Ruleta);
//arrJuegos.push(blackJack);
//arrJuegos.push(tragamonedasPlus);
var primerCasino = new Casino_1.Casino(arrJugadores, arrJuegos);
primerCasino.menuDeJuegos();
