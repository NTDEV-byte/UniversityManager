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
//components
import { AppComponent } from './app.component';
import { ConnexionComponent} from './components/auths/connexion/connexion.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { AdminComponent } from './components/admin/admin.component';
import { AjouterEnseignantComponent } from './components/admin/crud-enseignant/ajouter-enseignant/ajouter-enseignant.component';
import { ModifierEnseignantComponent } from './components/admin/crud-enseignant/modifier-enseignant/modifier-enseignant.component';
import { SupprimerEnseignantComponent } from './components/admin/crud-enseignant/supprimer-enseignant/supprimer-enseignant.component';
import { ListeEnseignantComponent } from './components/admin/crud-enseignant/liste-enseignant/liste-enseignant.component';
import { MatSidenavModule} from '@angular/material/sidenav';


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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
