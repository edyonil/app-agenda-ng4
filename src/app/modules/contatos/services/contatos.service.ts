import { Injectable } from '@angular/core';
import { Contatos } from './../models/contatos.model';

@Injectable()
export class ContatosService {

  private contatos: Contatos[] = 
  [
  	{	
      identificador: 1,
      nome: 'Diego', 
  		telefone: '71 9 9876-5432', 
  		operadora: 'TIM'
  	},
  	{	
      identificador: 2,
      nome: 'Danielle', 
  		telefone: '71 9 9876-5432', 
  		operadora: 'CLARO'
  	},    
  	{	
      identificador: 3,
      nome: 'Larissa', 
  		telefone: '71 9 9876-5432', 
  		operadora: 'OI'
  	}
  ];

  constructor() { }

  getContatos(): Promise<Contatos[]>
  {
    return Promise.resolve(this.contatos);  	
  }

  getContato(id: number): Promise<Contatos>
  { 
    return this.getContatos().then( contatos => contatos.find( contato => contato.identificador == id ) );       
  }

  addContato(item)
  {
  	this.contatos.push(item);
  }

  editContato(item)
  {
    this.getContato(item.identificador).then(contato => {
      contato.nome = item.nome;      
      contato.telefone = item.telefone;
      contato.operadora = item.operadora;
    });    
  }
}
