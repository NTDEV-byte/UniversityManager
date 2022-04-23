import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AjouterEnseignantComponent } from './components/admin/crud/ajouter-enseignant/ajouter-enseignant.component';
import { ModifierEnseignantComponent } from './components/admin/crud/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/admin/crud/supprimer-enseignant/supprimer-enseignant.component';

import {ConnexionComponent} from './components/auths/connexion/connexion.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';


const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'enseignant', component: EnseignantComponent},
  { path : 'admin' , component: AdminComponent},
  { path : 'admin/ajouter' , component: AjouterEnseignantComponent},
  { path : 'admin/modifier' , component: ModifierEnseignantComponent},
  { path : 'admin/supprimer' , component: SupprimerEnseignantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
