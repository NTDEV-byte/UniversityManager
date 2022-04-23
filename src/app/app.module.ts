import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import {ConnexionComponent} from './components/auths/connexion/connexion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { AdminComponent } from './components/admin/admin.component';
import { AjouterEnseignantComponent } from './components/admin/crud/ajouter-enseignant/ajouter-enseignant.component';
import { ModifierEnseignantComponent } from './components/admin/crud/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/admin/crud/supprimer-enseignant/supprimer-enseignant.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    EnseignantComponent,
    AdminComponent,
    AjouterEnseignantComponent,
    ModifierEnseignantComponent,
    SupprimerEnseignantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
