import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SenhaPipe } from './pipes/escondeSenha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    SenhaPipe
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [DomseguroPipe]
})
export class AppModule { }
