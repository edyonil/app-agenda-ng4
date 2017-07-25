import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Operadoras } from './../models/operadoras.model';

@Injectable()
export class OperadorasService {

  private url: string = "http://localhost:3000/operadoras/"

  constructor(private http: Http) { }

  getOperadoras(): Observable<Operadoras>
  {
    return this.http.get(this.url).map( response => response.json() )
  }

  getOperadora(id: number): Observable<Operadoras>
  {
    return this.http.get(this.url+id).map( response => response.json() )
  }
}
