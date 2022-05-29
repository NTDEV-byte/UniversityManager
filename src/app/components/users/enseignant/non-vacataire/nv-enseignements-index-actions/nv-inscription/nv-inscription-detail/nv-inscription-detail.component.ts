import { AuthService } from 'src/app/services/auths/auth.service';
import { AdminService } from 'src/app/services/users/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormationsService } from 'src/app/services/formations/formations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/users/enseignant/enseignant.service';

@Component({
  selector: 'app-nv-inscription-detail',
  templateUrl: './nv-inscription-detail.component.html',
  styleUrls: ['./nv-inscription-detail.component.css']
})
export class NvInscriptionEnseignementDetailComponent implements OnInit {

  idEnseignementSelectionner : string | null;
  enseignementDetail : any;
  detailEnseignementForm = new FormGroup(
    {
      nombreCM : new FormControl('', []),
      nombreTD : new FormControl('', []),
      nombreTP : new FormControl('', []),
    });


  constructor(
    private formationsService : FormationsService,
    private enseignantService : EnseignantService,
    private activatedRoute : ActivatedRoute,
    private snackBar : MatSnackBar,
    private authService : AuthService
    ){
    this.idEnseignementSelectionner =  this.activatedRoute.snapshot.paramMap.get("id")
    this.formationsService.getFormationById(this.idEnseignementSelectionner!).subscribe((data) => {
            this.enseignementDetail = data;
    })
  }

  ngOnInit() {

  }

  inscriptionEnseignantModule(){

        this.enseignantService.inscriptionEnseignantModule(
          {
          idEnseignant : this.authService.getUserDetails.id,
          idEnseignement: this.enseignementDetail["_id"],
          nombreCM :(this.detailEnseignementForm.value.nombreCM == null) ? 0 : this.detailEnseignementForm.value.nombreCM,
          nombreTD: (this.detailEnseignementForm.value.nombreTD == null) ? 0 : this.detailEnseignementForm.value.nombreTD,
          nombreTP: (this.detailEnseignementForm.value.nombreTP == null) ? 0 : this.detailEnseignementForm.value.nombreTP}
          ).subscribe((data) => {
                if(data.success){
                    this.snackBar.open(data.message , "Fermer" , {duration : 2000})
                }
          })

        this.detailEnseignementForm.reset();
  }
}
