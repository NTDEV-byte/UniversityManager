import { SelectionModel } from '@angular/cdk/collections';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FormationsService } from 'src/app/services/formations/formations.service';
import { AdminService } from 'src/app/services/users/admin/admin.service';
import { EnseignantService } from 'src/app/services/users/enseignant/enseignant.service';

@Component({
  selector: 'app-desinscription',
  templateUrl: './desinscription.component.html',
  styleUrls: ['./desinscription.component.css']
})
export class DesinscriptionComponent implements OnInit {

  enseignementsDisponibles: any[] = [];
  enseignementEnseigneeParCetEnseignant : any[] = [];
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
          });
       });
  }

  checkOnlyIfModuleEstEnseignee(module : any) : boolean {
      for(let enseignement of this.enseignementEnseigneeParCetEnseignant){
            if(module["_id"] == enseignement["_id"]) return true;
      }
      return false;
  }

  getModulesDesinscrit(modulesSelectionner : SelectionModel<MatListOption>){
             var modulesDesinscritIds = this.enseignementEnseigneeParCetEnseignant.filter(a => !modulesSelectionner.selected
                                                                                          .map(b => b["value"]["_id"])
                                                                                          .includes(a["_id"]))
                                                                             .map(e => e["_id"])
          this.adminService.desinscriptionEnseignantModules({idEnseignant : this.idEnseignantSelectionner!, modulesIDs: modulesDesinscritIds}).subscribe(
             (data) => {
                  if(data.success){
                      this.snackbar.open("Désinscription avec succès " , "Fermer" , {duration : 2000 , horizontalPosition: "center"});
                  }
                  else{
                     this.snackbar.open("Echec lors de l'ajouts des modules à l'enseignant" , "Fermer");
                  }
           })
  }

}
