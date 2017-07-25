import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import { Routes } from '@angular/router';

import { Contatos } from './../../models/contatos.model';
import { ContatosService } from './../../services/contatos.service';


@Component({
  selector: 'app-contato-detail',
  templateUrl: './contato-detail.component.html',
  styleUrls: ['./contato-detail.component.css']
})

export class ContatoDetailComponent implements OnInit {
 
  contato: Contatos
  contatoMaxId: number

  operadoras = [
    {id: 1, nome: "OI"},
    {id: 2, nome: "TIM"},
    {id: 3, nome: "CLARO"},
    {id: 4, nome: "VIVO"}
  ]
  
  constructor(
    private contatosService: ContatosService,  
    private route: ActivatedRoute,
    private location: Location,  
    private router: Router
  ) {}

  ngOnInit() 
  { 
    this.getContatos()
  }

  newContato(identificador, nome, telefone, operadora)
  {
    return {
      identificador: identificador,
      nome: nome,
      telefone: telefone,
      operadora: operadora
    } 
  }

  getContatos()
  {
    if(this.route.snapshot.params['id'])
    {      
      this.contatosService.getContato( +this.route.snapshot.params['id'] )
          .subscribe( contato => this.contato = contato )
    }
    else
    {
      this.contatosService.getContatoByMaxId()
          .subscribe( contato => this.contato = this.newContato(contato.identificador + 1, '', '', ''))              
    } 
  }

  add(form) 
  {
    let newContato = this.newContato(form.value.identificador, form.value.nome, form.value.telefone, form.value.operadora)
    
    this.contatosService.getContato( newContato.identificador ).subscribe(contato => {
      if(!contato)
      {        
        this.contatosService.addContato( newContato )
      }
      else
      {
        this.contatosService.editContato( newContato )
      }
      this.router.navigate(['/contatos'])
    })    
  }

  goBack(): void 
  {
    this.location.back();    
  }
}
