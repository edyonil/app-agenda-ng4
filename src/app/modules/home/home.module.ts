import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './../../app.routes';

import { ContatosModule } from './../contatos/contatos.module';
import { MessagesModule } from './../messages/messages.module';

import { HomeComponent } from './components/home.component';

@NgModule({
  imports: [
    CommonModule,
    ContatosModule,
    MessagesModule,    
    RouterModule.forChild(
      appRoutes
    )
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