import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './../../app.routes';

import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [MessagesComponent],
  exports: [
  	MessagesComponent
  ]
})
export class MessagesModule { }
