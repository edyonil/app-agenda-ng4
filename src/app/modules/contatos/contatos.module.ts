import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './../../app.routes';

import { ContatosComponent } from './components/contatos.component';
import { ContatoDetailComponent } from './components/contato-detail/contato-detail.component';
import { ContatosService } from './services/contatos.service';
import { InputComponent } from './components/shared/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [
  	ContatosComponent,
    ContatoDetailComponent,
    InputComponent
  ],
  providers: [
    ContatosService
  ],
  //para expor para outros modulos
  exports:[
  	ContatosComponent
  ]
})
export class ContatosModule { }
