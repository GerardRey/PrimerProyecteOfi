import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IniciComponent } from './inici/inici.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { QuiSomComponent } from './qui-som/qui-som.component';
import { LogRegisterComponent } from './log-register/log-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IniciComponent,
    GaleriaComponent,
    QuiSomComponent,
    LogRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
