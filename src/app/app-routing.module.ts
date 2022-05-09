import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/users/admin/admin.component';
import { AjouterEnseignantComponent } from './components/users/admin/crud-enseignant/ajouter-enseignant/ajouter-enseignant.component';
import { ListeEnseignantComponent } from './components/users/admin/crud-enseignant/liste-enseignant/liste-enseignant.component';
import { ModifierEnseignantComponent } from './components/users/admin/crud-enseignant/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/users/admin/crud-enseignant/supprimer-enseignant/supprimer-enseignant.component';

import {ConnexionComponent} from './components/auths/connexion/connexion.component';
import { EnseignantComponent } from './components/users/enseignant/enseignant.component';
import { DetailComponent } from './components/formations/detail/detail.component';
import { FormationsComponent } from './components/formations/formations.component';
import { SidenavComponent } from './components/home/sidenav/sidenav.component';


const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'enseignant', component: EnseignantComponent},
  { path : 'admin' , component: AdminComponent},
  { path : 'admin/index' , component: SidenavComponent},
  { path : 'admin/ajouterEnseignant' , component: AjouterEnseignantComponent},
  { path : 'admin/modifierEnseignant' , component: ModifierEnseignantComponent},
  { path : 'admin/supprimerEnseignant' , component: SupprimerEnseignantComponent},
  { path : 'admin/listEnseignant' , component: ListeEnseignantComponent},
  { path : 'formation/listFormation' , component: FormationsComponent},
  { path : 'formation/detail' , component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
