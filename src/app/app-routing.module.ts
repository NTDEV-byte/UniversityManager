import { DesinscriptionComponent } from './components/users/admin/admin-enseignants-actions/inscription-desinscription/detail/desinscription/desinscription.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEnseignantComponent } from './components/users/admin/admin-enseignants-actions/crud/ajouter-enseignant/ajouter-enseignant.component';
import { ListeEnseignantComponent } from './components/users/admin/admin-enseignants-actions/crud/liste-enseignant/liste-enseignant.component';
import { ModifierEnseignantComponent } from './components/users/admin/admin-enseignants-actions/crud/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/users/admin/admin-enseignants-actions/crud/supprimer-enseignant/supprimer-enseignant.component';

import {ConnexionComponent} from './components/auths/connexion/connexion.component';
import { DetailComponent } from './components/users/admin/admin-formations-actions/affichage/formations/detail/detail.component';
import { FormationsComponent } from './components/users/admin/admin-formations-actions/affichage/formations/formations.component';
import { ProfilComponent } from './components/users/shared/profil/profil.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/home/sidenav/sidenav-index/sidenav.component';
import { AdminMenuEnseignantActionsComponent } from './components/home/sidenav/menu-sidenav/admin/admin-menu-enseignant-actions/admin-menu-enseignant-actions.component';
import { AdminMenuFormationActionsComponent } from './components/home/sidenav/menu-sidenav/admin/admin-menu-formation-actions/admin-menu-formation-actions.component';
import { IndexComponent } from './components/users/admin/admin-enseignants-actions/inscription-desinscription/index/index.component';
import { InscriptionDetailComponent } from './components/users/admin/admin-enseignants-actions/inscription-desinscription/detail/inscription/inscription-detail.component';
import { AttributionGroupeComponent } from './components/users/admin/admin-enseignants-actions/inscription-desinscription/detail/attribution-groupe/attribution-groupe.component';
import { ListeGroupeComponent } from './components/users/admin/admin-enseignants-actions/inscription-desinscription/detail/attribution-groupe/liste-groupe/liste-groupe.component';
import { EnseignantNvUcActionsComponent } from './components/users/enseignant/non-vacataire/nv-uc-index-actions/enseignant-nv-uc-actions.component';
import { EnseignantNvEnseignementsActionsComponent } from './components/users/enseignant/non-vacataire/nv-enseignements-index-actions/enseignant-nv-enseignements-actions.component';
import { EnseignantNvRecapitulatifActionsComponent } from './components/users/enseignant/non-vacataire/nv-recapitulatif-index-actions/enseignant-nv-recapitulatif-actions.component';
import { NvInscriptionEnseignementComponent } from './components/users/enseignant/non-vacataire/nv-enseignements-index-actions/nv-inscription/nv-inscription-enseignement.component';
import { NvInscriptionEnseignementDetailComponent } from './components/users/enseignant/non-vacataire/nv-enseignements-index-actions/nv-inscription/nv-inscription-detail/nv-inscription-detail.component';
import { NvListModulesEnseigneesComponent} from "./components/users/enseignant/non-vacataire/nv-enseignements-index-actions/nv-list-modules-enseignees/nv-list-modules-enseignees.component";

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'home', component: HomeComponent },

  { path : 'admin/index' , component: SidenavComponent},
  { path : 'admin/EnseignantActions' , component: AdminMenuEnseignantActionsComponent},
  { path : 'admin/ajouterEnseignant' , component: AjouterEnseignantComponent},
  { path : 'admin/modifierEnseignant' , component: ModifierEnseignantComponent},
  { path : 'admin/supprimerEnseignant' , component: SupprimerEnseignantComponent},
  { path : 'admin/indexInscriptionDesinscriptionModule', component: IndexComponent},
  { path:  'admin/inscriptionModuleDetail/:id' , component: InscriptionDetailComponent},
  { path:  'admin/desinscriptionModuleDetail/:id' , component: DesinscriptionComponent},
  { path:  'admin/attributionGroupe/:id' , component: AttributionGroupeComponent},
  { path:  'admin/listeGroupeAttribueeEnseignant/:id' , component: ListeGroupeComponent},
  { path : 'admin/listEnseignant' , component: ListeEnseignantComponent},
  { path : 'admin/FormationActions' , component: AdminMenuFormationActionsComponent},
  { path : 'admin/listFormation' , component: FormationsComponent},
  { path : 'admin/RecapitulatifActions' , component: AdminMenuEnseignantActionsComponent},

  { path : 'EnseignantNV/UcIndex' , component: EnseignantNvUcActionsComponent},
  { path : 'EnseignantNV/EnseignementIndex' , component: EnseignantNvEnseignementsActionsComponent},
  { path : 'EnseignantNV/InscriptionListEnseignement', component: NvInscriptionEnseignementComponent},
  { path : 'EnseignantNV/InscriptionEnseignementDetail/:id' , component: NvInscriptionEnseignementDetailComponent},
  { path : 'EnseignantNV/ListeModulesEnseignee' , component: NvListModulesEnseigneesComponent},
  { path : 'EnseignantNV/RecapitulatifIndex' , component: EnseignantNvRecapitulatifActionsComponent},


  { path : 'formation/detail' , component: DetailComponent},

  { path : 'shared/modificationProfil' , component: ProfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
