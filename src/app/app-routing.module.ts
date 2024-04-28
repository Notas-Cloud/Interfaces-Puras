import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './interfazes/componentes/login-register/login-register.component';
import { NavbardComponent } from './interfazes/compartido/navbard/navbard.component';
import { LandingComponent } from './interfazes/compartido/landing/landing.component';
import { Parte1Component } from './interfazes/compartido/landing/parte1/parte1.component';
import { Parte2Component } from './interfazes/compartido/landing/parte2/parte2.component';
import { Parte3Component } from './interfazes/compartido/landing/parte3/parte3.component';
import { SuscribirseComponent } from './interfazes/componentes/suscribirse/suscribirse.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'login-registro', component: LoginRegisterComponent },
  { path: 'nav', component: NavbardComponent },
  { path: 'lan1', component: Parte1Component },
  { path: 'lan2', component: Parte2Component },
  { path: 'lan3', component: Parte3Component },
  { path: 'Pago', component: SuscribirseComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
