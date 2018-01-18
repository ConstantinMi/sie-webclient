import { Injectable } from '@angular/core';
import { Cont } from './cont';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContService {

  private apiUrl = 'http://localhost:8080/sie-webserver/cont';
  // private apiUrl = 'http://localhost:8080/nv-webserver/nv/network/cont';

  constructor(private http: Http) { }

  findAll(): Observable<Cont[]> {
    return this.http.get(this.apiUrl + '/toate')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findByCod(cod: string): Observable<Cont> {
    return this.http.get(this.apiUrl + '/' + cod)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

  saveCont(cont: Cont): Observable<Cont> {
    return this.http.post(this.apiUrl, cont)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateCont(cont: Cont): Observable<Cont> {
    return this.http.put(this.apiUrl, cont)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getTipuriCont() {
    return this.http.get(this.apiUrl + '/tipuri')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
