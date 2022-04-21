import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ConnexionComponent} from './components/connexion/connexion.component';


const routes: Routes = [
  { path: 'connexion-component', component: ConnexionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
