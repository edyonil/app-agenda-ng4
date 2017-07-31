import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import { Routes } from '@angular/router';

import { Contatos } from './../../models/contatos.model';
import { Operadoras } from './../../../operadoras/models/operadoras.model';

import { ContatosService } from './../../services/contatos.service';
import { OperadorasService } from './../../../operadoras/services/operadoras.service';


@Component({
  selector: 'app-contato-detail',
  templateUrl: './contato-detail.component.html',
  styleUrls: ['./contato-detail.component.css']
})

export class ContatoDetailComponent implements OnInit {
 
  contato: Contatos
  contatoMaxId: number
  operadoras: Operadoras

  formulario: FormGroup;
  
  constructor(
    private contatosService: ContatosService,  
    private operadorasService: OperadorasService,
    private route: ActivatedRoute,
    private location: Location,  
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() 
  { 
    this.formulario = this.formBuilder.group({
      identificador: [null],
      nome: [null],
      telefone: [null],
      operadora: [null]
    })
    this.getContatos()
    this.getOperadoras()
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
        .subscribe( contato => {     
          this.formulario = this.formBuilder.group({
            identificador: [contato.identificador],
            nome: [contato.nome],
            telefone: [contato.telefone],
            operadora: [contato.operadora]
          })          
        }) 
    }
    else
    {    
      this.contatosService.getContatoByMaxId()
        .subscribe( contato => {     
          this.formulario = this.formBuilder.group({
            identificador: [contato.identificador + 1],
            nome: [null],
            telefone: [null],
            operadora: [null]
          })          
        })            
    } 
  }

  getOperadoras()
  {
    this.operadorasService.getOperadoras().subscribe( operadoras => this.operadoras = operadoras )
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
