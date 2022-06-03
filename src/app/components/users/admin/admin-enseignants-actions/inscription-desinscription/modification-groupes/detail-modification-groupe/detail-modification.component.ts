import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auths/auth.service';
import { FormationsService } from 'src/app/services/formations/formations.service';
import { AdminService } from 'src/app/services/users/admin/admin.service';
import { EnseignantService } from 'src/app/services/users/enseignant/enseignant.service';

@Component({
  selector: 'app-detail-modification',
  templateUrl: './detail-modification.component.html',
  styleUrls: ['./detail-modification.component.css']
})
export class DetailModificationGroupeComponent implements OnInit {

  idEnseignementSelectionner : string | null;
  enseignementDetail : any;
  enseignementInformationGroupes : any;

  private nombreGroupeCMEntree : any;
  private nombreGroupeTDEntree : any;
  private nombreGroupeTPEntree : any;

  detailEnseignementForm = new FormGroup(
    {
      nombreCM : new FormControl('', []),
      nombreTD : new FormControl('', []),
      nombreTP : new FormControl('', []),
    });


  constructor(
    private formationsService : FormationsService,
    private enseignantService : EnseignantService,
    private authService : AuthService,
    private adminService : AdminService,
    private activatedRoute : ActivatedRoute,
    private snackBar : MatSnackBar,
    ){
      this.idEnseignementSelectionner =  this.activatedRoute.snapshot.paramMap.get("id")
    }

  ngOnInit() {
      this.adminService.getEnseignementDetailCM_TD_TP(this.idEnseignementSelectionner!).subscribe((data) => {
           this.enseignementInformationGroupes = data as [];
      })

      this.formationsService.getFormationById(this.idEnseignementSelectionner!).subscribe((data) => {
              this.enseignementDetail = data;
      })
  }

  modificationGroupesEnseignant(){
        if(this.valideEntreeUtilisateur()){
          this.enseignantService.inscriptionEnseignantModule(
            {
            idEnseignant : this.authService.getUserDetails.id,
            idEnseignement: this.enseignementDetail["_id"],
            nombreCM: this.nombreGroupeCMEntree,
            nombreTD: this.nombreGroupeTDEntree,
            nombreTP: this.nombreGroupeTPEntree}

            ).subscribe((data) => {
                  if(data.success){
                      this.snackBar.open("Modifié avec succès !" , "Fermer" , {duration : 2000})
                  }
            })

          this.detailEnseignementForm.reset();
        }
  }

  valideEntreeUtilisateur() : any {

     var valide = true;
      // vérification de l'entrée de l'utilisateur
      this.nombreGroupeCMEntree =  (this.detailEnseignementForm.value.nombreCM == "") ? 0 : this.detailEnseignementForm.value.nombreCM
      this.nombreGroupeTDEntree =  (this.detailEnseignementForm.value.nombreTD == "") ? 0 : this.detailEnseignementForm.value.nombreTD
      this.nombreGroupeTPEntree =  (this.detailEnseignementForm.value.nombreTP == "") ? 0 : this.detailEnseignementForm.value.nombreTP

      // vérification de la cohérence des données si ex nombreCM > maxgrCM  nombreCM = maxgrCM
      var maxNombreGroupeCM = this.enseignementDetail["grCM"];
      var maxNombreGroupeTD = this.enseignementDetail["grTD"];
      var maxNombreGroupeTP = this.enseignementDetail["grTP"];


      var totalGroupeInscritCM = 0;
      var totalGroupeInscritTD = 0;
      var totalGroupeInscritTP = 0;

      // si y'a déja un enseignant inscrit déja on récupérère ses valeurs
      if(this.enseignementInformationGroupes.length > 0){
          totalGroupeInscritCM = this.enseignementInformationGroupes[0]["totalCM"];
          totalGroupeInscritTD = this.enseignementInformationGroupes[0]["totalTD"];
          totalGroupeInscritTP = this.enseignementInformationGroupes[0]["totalTP"];
      }

      // calcule des places restantes
      var placeRestanteCM =  maxNombreGroupeCM - totalGroupeInscritCM;
      var placeRestanteTD =  maxNombreGroupeTD - totalGroupeInscritTD;
      var placeRestanteTP =  maxNombreGroupeTP - totalGroupeInscritTP;

      if(this.nombreGroupeCMEntree == 0 && this.nombreGroupeTDEntree == 0 && this.nombreGroupeTPEntree == 0){
        valide = false;
        this.snackBar.open("Vérifier le nombre de CM , TD , TP","Fermer")
      }

      if(this.nombreGroupeCMEntree > placeRestanteCM){
        this.snackBar.open("Entrée invalide vérifier le nombre de groupe CM " , "Fermer")
        valide = false;
      }

      if(this.nombreGroupeTDEntree > placeRestanteTD){
        this.snackBar.open("Entrée invalide vérifier le nombre de groupe TD ","Fermer")
        valide = false;
      }

      if(this.nombreGroupeTPEntree > placeRestanteTP){
        this.snackBar.open("Entrée invalide vérifier le nombre de groupe TP","Fermer")
         valide = false;
      }

        return valide;
    }


}
