import { Component, OnInit } from '@angular/core';

import { Contatos } from './../models/contatos.model';
import { ContatosService } from './../services/contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit
{

  contatos: Contatos[] = [];

  constructor(
  	private contatosService: ContatosService,
  ) {}
  
  ngOnInit() {
  	this.contatosService.getContatos().then(contatos => this.contatos = contatos);
  }

  onDelete(id, i)
  {
    this.contatos = this.contatosService.deleteContato(id);
 	  this.contatos.splice(i, 1)  
  }
}
