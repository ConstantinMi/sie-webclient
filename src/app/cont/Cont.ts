export class Cont {
  cod: string;
  denumire: string;
  valoare: number;
  tipCont: string;

  constructor(cod: string, denumire: string, valoare: number, tipCont: string) {
    this.cod = cod;
    this.denumire = denumire;
    this.valoare = valoare;
    this.tipCont = tipCont;
  }
}
