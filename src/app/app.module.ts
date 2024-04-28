import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './interfazes/componentes/login-register/login-register.component';
import { NavbardComponent } from './interfazes/compartido/navbard/navbard.component';
import { FooterComponent } from './interfazes/compartido/footer/footer.component';
import { LandingComponent } from './interfazes/compartido/landing/landing.component';
import { BlockNotasComponent } from './interfazes/componentes/block-notas/block-notas.component';
import { Parte1Component } from './interfazes/compartido/landing/parte1/parte1.component';
import { Parte2Component } from './interfazes/compartido/landing/parte2/parte2.component';
import { Parte3Component } from './interfazes/compartido/landing/parte3/parte3.component';
import { SuscribirseComponent } from './interfazes/componentes/suscribirse/suscribirse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    NavbardComponent,
    FooterComponent,
    LandingComponent,
    BlockNotasComponent,
    Parte1Component,
    Parte2Component,
    Parte3Component,
    SuscribirseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
