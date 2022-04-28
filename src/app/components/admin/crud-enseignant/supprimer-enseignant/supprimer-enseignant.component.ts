import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/users/admin/admin.service';

@Component({
  selector: 'app-supprimer-enseignant',
  templateUrl: './supprimer-enseignant.component.html',
  styleUrls: ['./supprimer-enseignant.component.css']
})
export class SupprimerEnseignantComponent implements OnInit {

  formSubmitted : boolean = false;
  alertMessage: String = "";
  alertType : String = "";
  enseignants : any;
  enseignantSelectionner : any;

  supprimerForm = new FormGroup({
   nom: new FormControl('',[Validators.required]),
   prenom: new FormControl('',[Validators.required]),
   email: new FormControl('',[Validators.required , Validators.email]),
   role : new FormControl('',[Validators.required])
 });

 constructor(private adminService : AdminService) { }

 ngOnInit(): void {
     this.alert("Supprimer avec succès", "alert-success");
     this.adminService.listeDesEnseignants().subscribe((data) => {
              this.enseignants = data as [];
     });
 }

 selectEnseignant(enseignant: any){
  this.enseignantSelectionner = enseignant;
  this.supprimerForm.controls['nom'].setValue(this.enseignantSelectionner.nom);
  this.supprimerForm.controls['prenom'].setValue(this.enseignantSelectionner.prenom);
  this.supprimerForm.controls['role'].setValue(this.enseignantSelectionner.role);
  this.supprimerForm.controls['email'].setValue(this.enseignantSelectionner.email);
 }


 onSubmit() : void{
   if(this.supprimerForm.valid){
     const id = this.enseignantSelectionner._id;
     this.adminService.supprimerUnEnseignant(id).subscribe((data) => {
               if(data.success){ 
                this.alert("Supprimer avec succès", "alert-success");
               
               }
               else{
                this.alert("Echec de la suppression", "alert-danger");
               }
     });
     window.location.reload();
     this.supprimerForm.reset();
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
