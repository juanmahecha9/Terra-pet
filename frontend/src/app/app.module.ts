import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Modulos o componentes creados */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';

import { BarraMenuComponent } from './componentes/barra-menu/barra-menu.component';

/* Importar funciones o metodos http */
/* habilita los verbos http */
import {HttpClientModule} from '@angular/common/http';
/* permite el uso de los componentes del formulario para tomar los datos */
import {FormsModule}  from '@angular/forms';
/* importamos o concectamos el servicio al modulo principal */
import {productoService} from './service/producto.service';


@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    NosotrosComponent,
    FiltrosComponent,
    BarraMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [productoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
