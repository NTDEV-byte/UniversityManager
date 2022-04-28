import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/users/admin/admin.service';



export interface Role{
  value : string,
  viewValue : string
}

@Component({
  selector: 'app-modifier-enseignant',
  templateUrl: './modifier-enseignant.component.html',
  styleUrls: ['./modifier-enseignant.component.css']
})
export class ModifierEnseignantComponent implements OnInit {

  formSubmitted : boolean = false;
  alertMessage: String = "";
  alertType : String = "";
  enseignants : any;
  enseignantSelectionner : any;


  
  roles: Role[] = [
    {value: 'EC', viewValue: 'Enseignant-Chercheur'},
    {value: 'PRAG', viewValue: 'Professeur agrégé du secondaire détaché dans le supérieur'},
    {value: 'PAST' , viewValue: 'Enseignant-chercheur associé ou invité'},
    {value: 'CDE' , viewValue: "Contrat d'enseignement"},
    {value: 'ATER' , viewValue: "Attachés Temporaires d'Enseignement et de Recherche"},
    {value: 'Vacataire' , viewValue: "Personne extérieure à l'université qui intervient pour quelques heures"}
  ];

  modifierEnseignantForm = new FormGroup({
   nom: new FormControl('',[Validators.required]),
   prenom: new FormControl('',[Validators.required]),
   email: new FormControl('',[Validators.required , Validators.email]),
   role : new FormControl('',[Validators.required])
 });


 constructor(private adminService : AdminService) { }


 ngOnInit(): void {
     this.alert("Modifier avec succès", "alert-success");
     this.adminService.listeDesEnseignants().subscribe((data) => {
              this.enseignants = data as [];
     });
 }

 selectEnseignant(enseignant: any){
  this.enseignantSelectionner = enseignant;
  this.modifierEnseignantForm.controls['nom'].setValue(this.enseignantSelectionner.nom);
  this.modifierEnseignantForm.controls['prenom'].setValue(this.enseignantSelectionner.prenom);
  this.modifierEnseignantForm.controls['role'].setValue(this.enseignantSelectionner.role);
  this.modifierEnseignantForm.controls['email'].setValue(this.enseignantSelectionner.email);
 }


 onSubmit() : void{

   if(this.modifierEnseignantForm.valid){

     const id = this.enseignantSelectionner._id;
     const nom = this.modifierEnseignantForm.value.nom;
     const prenom = this.modifierEnseignantForm.value.prenom;
     const email = this.modifierEnseignantForm.value.email;
     const role = this.modifierEnseignantForm.value.role;
     this.adminService.modifierUnEnseignant(id,nom,prenom,email,role).subscribe((data) => {
            console.log("Modifier avec succès")
            this.modifierEnseignantForm.reset();
     });
   }

   
    this.formSubmitted = true;
 }

 alert(message : string , type : string){
    this.alertMessage = message;
    this.alertType = type;
 }

 resetState(){
   setInterval(() => {
       this.formSubmitted = false;
   } , 4000)
 }


}
