import { Component, OnInit, AfterContentInit } from '@angular/core';

import { Contatos } from './../models/contatos.model';
import { ContatosService } from './../services/contatos.service';
import { OperadorasService } from './../../operadoras/services/operadoras.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit, AfterContentInit
{

  contatos: Contatos[];

  constructor(
    private contatosService: ContatosService,
    private operadorasService: OperadorasService
  ) {}
  
  ngOnInit() 
  {
  	this.getContatos()
  }

  ngAfterContentInit()
  {
    this.getContatos() 
  }

  getContatos()
  {
    this.contatosService.getContatos().subscribe( contatos => {      
      contatos.map(contato => this.operadorasService.getOperadora(+contato.operadora).subscribe(
        operadora => {
          contato.operadora = operadora.nome
          this.contatos = contatos
        }
      ))       
    })
  }

  onDelete(id, i)
  {
    this.contatosService.deleteContato(id).subscribe( response => {
      if(response.ok)
      {
        this.contatos = this.contatos.filter( contato => contato.identificador != id )  
      }
      else 
      {
        throw new Error("deu merda silvio santos");
      }
    })     
  }
}
