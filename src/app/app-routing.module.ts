import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEnseignantComponent } from './components/users/admin/admin-do-these-actions-on-enseignants/crud-enseignants/ajouter-enseignant/ajouter-enseignant.component';
import { ListeEnseignantComponent } from './components/users/admin/admin-do-these-actions-on-enseignants/crud-enseignants/liste-enseignant/liste-enseignant.component';
import { ModifierEnseignantComponent } from './components/users/admin/admin-do-these-actions-on-enseignants/crud-enseignants/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/users/admin/admin-do-these-actions-on-enseignants/crud-enseignants/supprimer-enseignant/supprimer-enseignant.component';

import {ConnexionComponent} from './components/auths/connexion/connexion.component';
import { DetailComponent } from './components/users/admin/admin-do-these-actions-on-formations/affichage/formations/detail/detail.component';
import { FormationsComponent } from './components/users/admin/admin-do-these-actions-on-formations/affichage/formations/formations.component';
import { ProfilComponent } from './components/users/shared/profil/profil.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/home/sidenav/sidenav-index/sidenav.component';
import { AdminMenuEnseignantActionsComponent } from './components/home/sidenav/menu-sidenav/admin/admin-menu-enseignant-actions/admin-menu-enseignant-actions.component';
import { AdminMenuFormationActionsComponent } from './components/home/sidenav/menu-sidenav/admin/admin-menu-formation-actions/admin-menu-formation-actions.component';


const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'home', component: HomeComponent },
  { path : 'admin/index' , component: SidenavComponent},
  { path : 'admin/EnseignantActions' , component: AdminMenuEnseignantActionsComponent},
  { path : 'admin/ajouterEnseignant' , component: AjouterEnseignantComponent},
  { path : 'admin/modifierEnseignant' , component: ModifierEnseignantComponent},
  { path : 'admin/supprimerEnseignant' , component: SupprimerEnseignantComponent},
  { path : 'admin/listEnseignant' , component: ListeEnseignantComponent},
  { path : 'admin/FormationActions' , component: AdminMenuFormationActionsComponent},
  { path : 'admin/listFormation' , component: FormationsComponent},
  { path : 'formation/detail' , component: DetailComponent},
  { path : 'admin/RecapitulatifActions' , component: AdminMenuEnseignantActionsComponent},

  { path : 'shared/modificationProfil' , component: ProfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
