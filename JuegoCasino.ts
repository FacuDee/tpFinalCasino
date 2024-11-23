import { Jugador } from "./Jugador";

export abstract class JuegoCasino {
    private nombre: string;
    protected apuestaMin: number;
    protected miniInstruccion: string;
  
    constructor(nombre: string, apuestaMin: number, miniInstruccion: string) {
      this.nombre = nombre;
      this.apuestaMin = apuestaMin;
      this.miniInstruccion = miniInstruccion;
    }
  
    abstract jugar(jugador:Jugador): void;
  
    abstract resultado(): void;
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public getapuestaMin(): number {
      return this.apuestaMin;
    }
  
    public getMiniInstruccion(): string {
      return this.miniInstruccion;
    }
  }
  
