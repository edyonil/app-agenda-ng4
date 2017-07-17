import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosModule } from './../contatos/contatos.module';


import { HomeComponent } from './components/home.component';

@NgModule({
  imports: [
    CommonModule,
    ContatosModule,
  ],
  declarations: [
  	HomeComponent
  ],
  //para expor para outros modulos
  exports:[
  	HomeComponent
  ]
})
export class HomeModule { }