import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/users/admin/admin.component';
import { AjouterEnseignantComponent } from './components/users/admin/crud-enseignant/ajouter-enseignant/ajouter-enseignant.component';
import { ListeEnseignantComponent } from './components/users/admin/crud-enseignant/liste-enseignant/liste-enseignant.component';
import { ModifierEnseignantComponent } from './components/users/admin/crud-enseignant/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/users/admin/crud-enseignant/supprimer-enseignant/supprimer-enseignant.component';

import {ConnexionComponent} from './components/auths/connexion/connexion.component';
import { DetailComponent } from './components/formations/detail/detail.component';
import { FormationsComponent } from './components/formations/formations.component';
import { SidenavAdminComponent } from './components/home/sidenav/sidenav-admin/sidenav-admin.component';
import { ProfilComponent } from './components/users/profil/profil.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavEnseignantComponent } from './components/home/sidenav/sidenav-enseignant/sidenav-enseignant.component';


const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'home', component: HomeComponent },
  { path : 'admin/index' , component: SidenavAdminComponent},
  { path : 'admin/ajouterEnseignant' , component: AjouterEnseignantComponent},
  { path : 'admin/modifierEnseignant' , component: ModifierEnseignantComponent},
  { path : 'admin/supprimerEnseignant' , component: SupprimerEnseignantComponent},
  { path : 'admin/listEnseignant' , component: ListeEnseignantComponent},
  { path:  'enseignant/index', component: SidenavEnseignantComponent},
  { path : 'utilisateur/modificationProfil' , component: ProfilComponent},
  { path : 'formation/listFormation' , component: FormationsComponent},
  { path : 'formation/detail' , component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
