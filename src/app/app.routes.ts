import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './modules/contatos/components/contatos.component';
import { HomeComponent } from './modules/home/components/home.component';
import { ContatoDetailComponent } from './modules/contatos/components/contato-detail/contato-detail.component';
import { OperadorasComponent } from './modules/operadoras/components/operadoras/operadoras.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,    
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'contatos', component: ContatosComponent },
  { path: 'contato/add', component: ContatoDetailComponent },
  { path: 'contato/:id/edit', component: ContatoDetailComponent },
  { path: 'operadoras', component: OperadorasComponent }
  
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];