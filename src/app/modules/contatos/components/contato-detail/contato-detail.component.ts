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
 
  contato: Contatos;  

  constructor(
    private contatosService: ContatosService,  
    private route: ActivatedRoute,
    private location: Location,  
    private router: Router
  ) {}

  ngOnInit() 
  {    
    this.route.paramMap
      .switchMap( (params: ParamMap) => this.contatosService.getContato(+params.get('id')) )
      .subscribe( contatos => this.contato = contatos );       
  }

  add(form) 
  {

    this.contatosService.getContato(form.value.identificador).then(
      contato => {
        if(!contato)
        {
          if(!Object.keys(form.value).every(key => form.value[key]))
          {
            this.router.navigate(['/contatos']); 
          }
          else
          {
            this.contatosService.addContato(
              {
                identificador: form.value.identificador,
                nome: form.value.nome,
                telefone: form.value.telefone,
                operadora: form.value.operadora
              }
            )
          } 
        }
        else
        {
          this.contatosService.editContato(
            {
              identificador: form.value.identificador,
              nome: form.value.nome,
              telefone: form.value.telefone,
              operadora: form.value.operadora
            }
          );
        }
      }
    )
    this.router.navigate(['/contatos']);  
  }

  goBack(): void 
  {
    this.location.back();    
  }
}
