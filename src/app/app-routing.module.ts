import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { QuiSomComponent } from './qui-som/qui-som.component';
import { LogRegisterComponent } from './log-register/log-register.component';

const routes: Routes = [
  {path: 'inici', component: IniciComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'qui-som', component: QuiSomComponent},
  {path: 'log-register', component: LogRegisterComponent},
  {path: '**', component: IniciComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
