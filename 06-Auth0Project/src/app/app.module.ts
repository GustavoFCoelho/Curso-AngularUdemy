import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { ProtegidoComponent } from './componentes/protegido/protegido.component';
import { CallbackComponent } from './componentes/callback/callback.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'home', component: HeaderComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'protegida', component: ProtegidoComponent, canActivate: [ AuthGuard ]},
  {path: 'callback', component: CallbackComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PreciosComponent,
    ProtegidoComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
