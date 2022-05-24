import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { FormationsService } from 'src/app/services/formations/formations.service';
import { AdminService } from 'src/app/services/users/admin/admin.service';
import { ModifierEnseignantComponent } from '../../crud/modifier-enseignant/modifier-enseignant.component';

@Component({
  selector: 'app-inscription-desinscription-detail',
  templateUrl: './inscription-desinscription-detail.component.html',
  styleUrls: ['./inscription-desinscription-detail.component.css']
})
export class InscriptionDesinscriptionDetailComponent implements OnInit {

  enseignements: any[] = [];
  idEnseignantSelectionner : string | null = null;

  constructor(private activatedRoute: ActivatedRoute , private formationService : FormationsService,private AdminService : AdminService) { }

  ngOnInit(): void {
   this.formationService.getAllFormations().subscribe((data) => {
        this.enseignements = data as [];
    });
   this.idEnseignantSelectionner = this.activatedRoute.snapshot.paramMap.get("id");
   console.log(this.idEnseignantSelectionner)
  }

  getModulesSelectionner(modulesSelectionner : SelectionModel<MatListOption>){
            var modulesIds = [];
            for(let module of modulesSelectionner.selected){
                  //console.log(module["_value"]["_id"])
                  modulesIds.push(module["_value"]["_id"])
            }
           this.AdminService.inscriptionEnseignantModules({idEnseignant: this.idEnseignantSelectionner! , modulesIDs: modulesIds}).subscribe(
             (data) => {
                
           })
  } 
}
