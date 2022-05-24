//defaults
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

// materials
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
//components
import { AppComponent } from './app.component';
import { ConnexionComponent} from './components/auths/connexion/connexion.component';
import { EnseignantComponent } from './components/users/enseignant/enseignant.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { AjouterEnseignantComponent } from './components/users/admin/admin-enseignants-actions/crud/ajouter-enseignant/ajouter-enseignant.component';
import { ModifierEnseignantComponent } from './components/users/admin/admin-enseignants-actions/crud/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/users/admin/admin-enseignants-actions/crud/supprimer-enseignant/supprimer-enseignant.component';
import { ListeEnseignantComponent } from './components/users/admin/admin-enseignants-actions/crud/liste-enseignant/liste-enseignant.component';
import { FormationsComponent } from './components/users/admin/admin-formations-actions/affichage/formations/formations.component';
import { DetailComponent } from './components/users/admin/admin-formations-actions/affichage/formations/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilComponent } from './components/users/shared/profil/profil.component';
import { NonVacataireComponent } from './components/users/enseignant/non-vacataire/non-vacataire.component';
import { VacataireComponent } from './components/users/enseignant/vacataire/vacataire.component';
import { SidenavComponent } from './components/home/sidenav/sidenav-index/sidenav.component';
import { AdminMenuComponent } from './components/home/sidenav/menu-sidenav/admin/admin-main-menu-actions/admin-menu.component';
import { VacataireMenuComponent } from './components/home/sidenav/menu-sidenav/enseignants/vactaire/vacataire-menu/vacataire-menu.component';
import { NonVacataireMenuComponent } from './components/home/sidenav/menu-sidenav/enseignants/non-vactaire/non-vacataire-menu/non-vacataire-menu.component';
import { AdminMenuEnseignantActionsComponent } from './components/home/sidenav/menu-sidenav/admin/admin-menu-enseignant-actions/admin-menu-enseignant-actions.component';
import { AdminMenuFormationActionsComponent } from './components/home/sidenav/menu-sidenav/admin/admin-menu-formation-actions/admin-menu-formation-actions.component';
import { IndexComponent } from './components/users/admin/admin-enseignants-actions/inscription-desinscription/index/index.component';
import { InscriptionDesinscriptionDetailComponent } from './components/users/admin/admin-enseignants-actions/inscription-desinscription/detail/inscription-desinscription-detail.component';

  @NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    EnseignantComponent,
    AdminComponent,
    AjouterEnseignantComponent,
    ModifierEnseignantComponent,
    SupprimerEnseignantComponent,
    ListeEnseignantComponent,
    FormationsComponent,
    DetailComponent,
    HomeComponent,
    ProfilComponent,
    NonVacataireComponent,
    VacataireComponent,
    SidenavComponent,
    AdminMenuComponent,
    VacataireMenuComponent,
    NonVacataireMenuComponent,
    AdminMenuEnseignantActionsComponent,
    AdminMenuFormationActionsComponent,
    IndexComponent,
    InscriptionDesinscriptionDetailComponent,
  ],

  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSliderModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatTreeModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
