import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ConnexionComponent} from './components/connexion/connexion.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'connexion-component', component: ConnexionComponent },
  { path : 'dashboard-component' , component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
