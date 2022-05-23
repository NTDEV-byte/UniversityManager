import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/users/admin/admin.service';


export interface IStatut{
  value : string,
  viewValue : string
}

@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})


export class AjouterEnseignantComponent implements OnInit {

    statuts: IStatut[] = [
    {value: 'EC', viewValue: "Enseignant-Chercheur"},
    {value: 'PRAG', viewValue: "Professeur agrégé du secondaire détaché dans le supérieur"},
    {value: 'PAST' , viewValue: "Enseignant-chercheur associé ou invité"},
    {value: 'CDE' , viewValue: "Contrat d'enseignement"},
    {value: 'ATER' , viewValue: "Attachés Temporaires d'Enseignement et de Recherche"},
    {value: 'Vacataire' , viewValue: "Personne extérieure à l'université (Vacataire)"}
  ];

   formSubmitted : boolean = false;

    ajouteEnseignantForm = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPass: new FormControl('',[Validators.required]),
    statut : new FormControl('',[Validators.required]),
  });


  constructor(private adminService : AdminService,private _snackBar: MatSnackBar) { }


  ngOnInit(): void {}


  onSubmit() : void{


    if(this.ajouteEnseignantForm.valid){


      const nom = this.ajouteEnseignantForm.value.nom;
      const prenom = this.ajouteEnseignantForm.value.prenom;
      const email = this.ajouteEnseignantForm.value.email;
      const password = this.ajouteEnseignantForm.value.password;
      const confirmPass = this.ajouteEnseignantForm.value.confirmPass;
      const statut = this.ajouteEnseignantForm.value.statut;
      const role = "enseignant";
  
    // this.adminService.ajouterUnEnseignant(nom,prenom,email,password,role)
  
      if(password != confirmPass){ 
        this._snackBar.open("Mot de passe non identique !" , "Fermer")
      }
      else{
        this.adminService.ajouterUnEnseignant({nom,prenom,email,password,statut,role}).subscribe((data) => {
          console.log(data);
                if(data.success){
                  this._snackBar.open("Enseignant Ajouté avec succès !" , "Fermer")
                  this.ajouteEnseignantForm.reset();
                }
                else{
                  this._snackBar.open("Echec lors de l'ajout de l'enseignant !" , "Fermer")
                }
        });
      }
    }
    
     this.formSubmitted = true;
  }
}
