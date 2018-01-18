import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Rezultat } from './trezorerie/rezultat';
import { RezultatDR } from './durata-rotatie/rezultatdr';
import { RezultatRMS } from './rms/rezultatrms';
import { RezultatRNFR } from './rnfr/rezultatrnfr';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AiInfoService {

  private apiUrl = 'http://localhost:8080/sie-webserver/echilibru';
  private indUrl = 'http://localhost:8080/sie-webserver/indicator';

  constructor(private http: Http) { }

  obtinereNecesarFondRulment(): Observable<Rezultat> {
    console.log('Service Working!! In obtinereNecesarFondRulment');
    return this.http.get(this.apiUrl + '/necesar-fond-rulment')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Serer error'));
  }

  obtinereFondRulment(): Observable<Rezultat> {
    console.log('Service Working!! In obtinereFondRulment');
    return this.http.get(this.apiUrl + '/fond-rulment')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Serer error'));
  }

  obtinereValoareTrezorerie(): Observable<Rezultat> {
    return this.http.get(this.apiUrl + '/trezorerie')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  obtinereCifraAfaceri(): Observable<RezultatDR> {
    return this.http.get(this.indUrl + '/cifra-afaceri')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  obtinereDurataRotatie(): Observable<RezultatDR> {
    return this.http.get(this.indUrl + '/durata-rotatie')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  obtinereRata(): Observable<RezultatRMS> {
    return this.http.get(this.indUrl + '/rms')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  obtinereRNFR(): Observable<RezultatRNFR> {
    return this.http.get(this.indUrl + '/rfnfr')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
