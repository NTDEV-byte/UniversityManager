import { EnseignantService } from './../../../../../../../services/users/enseignant/enseignant.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FormationsService } from 'src/app/services/formations/formations.service';
import { AdminService } from 'src/app/services/users/admin/admin.service';

@Component({
  selector: 'app-inscription-detail',
  templateUrl: './inscription-detail.component.html',
  styleUrls: ['./inscription-detail.component.css']
})
export class InscriptionDetailComponent implements OnInit {

  enseignementsDisponibles: any[] = [];
  enseignementEnseigneeParCetEnseignant : any[] = [];
  enseignementNonEnseigneeParCetEnseignant : any[]  = [];
  idEnseignantSelectionner : string | null = null;

  constructor(
              private formationService : FormationsService,
              private adminService : AdminService,
              private enseignantService : EnseignantService,
              private activatedRoute: ActivatedRoute,
              private snackbar : MatSnackBar
              ) {}


  ngOnInit(): void {
   this.idEnseignantSelectionner = this.activatedRoute.snapshot.paramMap.get("id");

       this.formationService.getAllFormations().subscribe((data) => {
        this.enseignementsDisponibles = data as [];
        this.enseignantService.getListModulesEnseignees(this.idEnseignantSelectionner!).subscribe((dataEnseignant) => {
        this.enseignementEnseigneeParCetEnseignant = dataEnseignant as [];
            this.enseignementNonEnseigneeParCetEnseignant = this.enseignementsDisponibles.filter(
                                                                                          a => !this.enseignementEnseigneeParCetEnseignant
                                                                                         .map(b=>b["_id"])
                                                                                         .includes(a["_id"]))
        });
    });
  }

  getModulesSelectionner(modulesSelectionner : SelectionModel<MatListOption>){
            var modulesIds = [];
            for(let module of modulesSelectionner.selected){
                  modulesIds.push(module["_value"]["_id"])
            }
           this.adminService.inscriptionEnseignantModules({idEnseignant: this.idEnseignantSelectionner! , modulesIDs: modulesIds}).subscribe(
             (data) => {
                  if(data.success){
                      this.snackbar.open("Modules ajoutés avec succès " , "Fermer" , {duration : 2000 , horizontalPosition: "center"});
                  }
                  else{
                     this.snackbar.open("Echec lors de l'ajouts des modules à l'enseignant" , "Fermer");
                  }
           })
  }
}
