import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AjouterEnseignantComponent } from './components/admin/crud-enseignant/ajouter-enseignant/ajouter-enseignant.component';
import { ListeEnseignantComponent } from './components/admin/crud-enseignant/liste-enseignant/liste-enseignant.component';
import { ModifierEnseignantComponent } from './components/admin/crud-enseignant/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/admin/crud-enseignant/supprimer-enseignant/supprimer-enseignant.component';

import {ConnexionComponent} from './components/auths/connexion/connexion.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';


const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'enseignant', component: EnseignantComponent},
  { path : 'admin' , component: AdminComponent},
  { path : 'admin/ajouterEnseignant' , component: AjouterEnseignantComponent},
  { path : 'admin/modifierEnseignant' , component: ModifierEnseignantComponent},
  { path : 'admin/supprimerEnseignant' , component: SupprimerEnseignantComponent},
  { path : 'admin/listEnseignant' , component: ListeEnseignantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
