import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contatos } from './../models/contatos.model';

@Injectable()
export class ContatosService {

  constructor(private http: Http) { }

  getContatos(): Observable<Contatos[]>
  {
    // return Promise.resolve(this.contatos);
    return this.http.get( "http://localhost:3000/contatos" ).map( response => response.json() );  	
  }

  getContato(id: number)
  { 
    return this.getContatos().map( contatos => contatos.find( contato => contato.identificador == id ) );
    // return this.getContatos().then( contatos => contatos.find( contato => contato.identificador == id ) );       
  }

  getContatoByMaxId()
  {
    return this.getContatos()
      .map( 
        contatos => contatos.reduce( 
          ( contato, contatoAtual, b, c ) => { 
            if(contato.identificador >= contatoAtual.identificador)
            {                    
              return contato;
            }else{
              return contatoAtual;
            }
          }
        )
      );
  }

  addContato(item: Contatos)
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
  	this.http.post( 
      "http://localhost:3000/contatos", 
      JSON.stringify(item), 
      new RequestOptions({headers: headers})
    ).subscribe();
  }  


  editContato(item: Contatos)
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.put( 
      `http://localhost:3000/contatos/${item.identificador}`, 
      JSON.stringify(item), 
      new RequestOptions({headers: headers})
    ).subscribe();   
  }

  deleteContato(id: number)
  { 
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete( 
      `http://localhost:3000/contatos/${id}`, 
      new RequestOptions({headers: headers})
    );  
  }
}
