import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* importar componentes */
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
