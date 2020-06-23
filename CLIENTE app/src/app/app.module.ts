

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppComponent } from './app.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { SigninComponent } from './componentes/signin/signin.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { BarraMenuComponent } from './componentes/barra-menu/barra-menu.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';


/* Importar funciones o metodos http */
/* habilita los verbos http */
/* permite el uso de los componentes del formulario para tomar los datos */
/* importamos o concectamos el servicio al modulo principal */

import { FooterComponent } from './componentes/footer/footer.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CarritoService } from './services/carrito.service';
import { productoService } from './services/adopcion.service';
import { AdopcionComponent } from './componentes/adopcion/adopcion.component';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { ChatbotComponent } from './componentes/chatbot/chatbot.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BarraMenuComponent,
    EquipoComponent,
    InicioComponent,
    NosotrosComponent,
    FiltrosComponent,
    FooterComponent,
    CarritoComponent,
    AdopcionComponent,
    AnimalesComponent,
    ChatbotComponent,
    CalendarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [
    AuthGuard, CarritoService, productoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
