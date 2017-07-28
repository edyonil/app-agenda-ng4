import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './../../app.routes';

import { OperadorasComponent } from './components/operadoras/operadoras.component';
import { OperadorasService } from './services/operadoras.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [
    OperadorasComponent
  ],
  providers:[
    OperadorasService
  ],
  exports:[
    OperadorasComponent
  ]
})
export class OperadorasModule { }
