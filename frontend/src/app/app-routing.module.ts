import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* importar componentes */
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

import { InicioComponent } from'./componentes/inicio/inicio.component'
import { from } from 'rxjs';

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
    path: 'regitro',
    component: RegistroComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
