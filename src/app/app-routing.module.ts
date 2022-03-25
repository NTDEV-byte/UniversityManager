import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ConnexionComponent} from './connexion/connexion.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {NotfoundComponent} from './notfound/notfound.component';


const routes: Routes = [
  { path: 'inscription-component', component: InscriptionComponent },
  { path: 'connexion-component', component: ConnexionComponent },
  { path: 'inscriptionX',   redirectTo: '/inscription-component', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
