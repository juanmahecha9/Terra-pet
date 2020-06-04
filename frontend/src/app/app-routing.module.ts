import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* importar componentes */
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

import { InicioComponent } from'./componentes/inicio/inicio.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';


const routes: Routes = [
  {path: '',
  redirectTo: '/inicio', pathMatch: 'full'
  },
  {

    path: 'team',
    component: EquipoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'aboutus',
    component: NosotrosComponent
  },
  {
    path: 'photos',
    component: FiltrosComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
