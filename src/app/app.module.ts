import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ContatosModule} from './modules/contatos/contatos.module';
import { OperadorasModule } from './modules/operadoras/operadoras.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContatosModule,
    HomeModule,
    OperadorasModule,    
    HttpModule,

    FormsModule,

    RouterModule.forRoot(
    	appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
