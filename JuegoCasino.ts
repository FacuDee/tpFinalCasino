export abstract class JuegoCasino {
  private nombre: string;
  private apuestaMin: number;
  private miniInstruccion: string;

  constructor(nombre: string, apuestaMin: number, miniInstruccion: string) {
    this.nombre = nombre;
    this.apuestaMin = apuestaMin;
    this.miniInstruccion = miniInstruccion;
  }

  abstract jugar(): void;

  abstract resultado(): void;

  public getNombre(): string {
    return this.nombre;
  }

  public getApuesta(): number {
    return this.apuestaMin;
  }

  public getMiniInstruccion(): string {
    return this.miniInstruccion;
  }
}
