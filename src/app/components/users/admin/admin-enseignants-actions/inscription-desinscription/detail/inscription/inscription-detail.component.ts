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

  enseignements: any[] = [];
  idEnseignantSelectionner : string | null = null;

  constructor(private activatedRoute: ActivatedRoute, 
              private formationService : FormationsService,
              private adminService : AdminService,
              private snackbar : MatSnackBar
              
              ) { }

  ngOnInit(): void {
   this.formationService.getAllFormations().subscribe((data) => {
        this.enseignements = data as [];
    });
   this.idEnseignantSelectionner = this.activatedRoute.snapshot.paramMap.get("id");
  // console.log(this.idEnseignantSelectionner)
  }

  getModulesSelectionner(modulesSelectionner : SelectionModel<MatListOption>){
            var modulesIds = [];
            for(let module of modulesSelectionner.selected){
                  //console.log(module["_value"]["_id"])
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
