import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/users/admin/admin.service';
import { FormGroup, FormControl, Validators, AnyForUntypedForms } from '@angular/forms';
import { FormationsService } from './../../../../../../../../services/formations/formations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-groupe',
  templateUrl: './create-groupe.component.html',
  styleUrls: ['./create-groupe.component.css']
})
export class CreateGroupeComponent implements OnInit {

  modules : any[] = [];
  nomGroupeForm = new FormGroup({nom : new FormControl('' , [Validators.required])})
  enseignantID : any;
  typesGroupe: any[] =  ["CM" , "TD" , "TP"]



  constructor(
    private formationService : FormationsService,
    private adminService : AdminService,
    private activeRoute : ActivatedRoute,
    private snackBar : MatSnackBar) {}

  ngOnInit() {
      this.formationService.getAllFormations().subscribe((data) => {
             this.modules = data as [];
            // console.log(this.modules)

      });
      this.enseignantID = this.activeRoute.snapshot.paramMap.get("id");
      //console.log(this.enseignantID);
  }

  createGroupeEtudiant(selected : any , type: string){
       if(this.nomGroupeForm.valid){

          const nomGroupe = this.nomGroupeForm.value.nom
          const idEnseignement = selected.value["_id"]

          this.adminService.attributionGroupeEnseignant({
            nomGroupe: nomGroupe,
            typeGroupe: type,
            nombreEtudiants: 0,
            idEnseignant: this.enseignantID,
            idEnseignement: idEnseignement}).subscribe((data) => {
                  if(data.success){
                        this.snackBar.open("Groupe "+nomGroupe+" ajouté à l'enseignant" , "Fermer" ,  {duration: 2000})
                  }
                  else{
                    this.snackBar.open(data.message, "Fermer")
                  }
            })

            this.nomGroupeForm.reset()
       }
  }

}
