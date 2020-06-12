import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';
import {PefilFotosComponent } from './components/pefil-fotos/pefil-fotos.component'
import { PefilvistaComponent } from './components/pefilvista/pefilvista.component'
import { PefilpreComponent } from './components/pefilpre/pefilpre.component'
import { UsuariosComponent } from './components/usuarios/usuarios.component'
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TasksComponent
  },
  {
    path: 'photos/new',
    component: PefilFotosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'photos',
    component: PefilvistaComponent,
    
  },
  {
    path: 'photos/:id',
    component: PefilpreComponent,
   
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
