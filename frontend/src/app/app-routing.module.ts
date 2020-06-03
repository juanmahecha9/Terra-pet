import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* importar componentes */
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NosotrosComponent} from './componentes/nosotros/nosotros.component'

import { InicioComponent } from'./componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';

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
<<<<<<< HEAD
    path: 'aboutus',
    component: NosotrosComponent
  },
  {
    path: 'adopciones',
    component: FiltrosComponent
=======
    path: 'nosotros',
    component:NosotrosComponent
>>>>>>> ff9f12fb235a2ff7eacb909bb405c02e5bf0efc1
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
