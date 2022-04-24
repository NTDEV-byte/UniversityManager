import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/users/admin/admin.service';

@Component({
  selector: 'app-modifier-enseignant',
  templateUrl: './modifier-enseignant.component.html',
  styleUrls: ['./modifier-enseignant.component.css']
})
export class ModifierEnseignantComponent implements OnInit {

  formSubmitted : boolean = false;
  alertMessage: String = "";
  alertType : String = "";


  modifierEnseignantForm = new FormGroup({
   nom: new FormControl('',[Validators.required]),
   prenom: new FormControl('',[Validators.required]),
   email: new FormControl('',[Validators.required , Validators.email]),
   password: new FormControl('',[Validators.required]),
   confirmPass: new FormControl('',[Validators.required]),
   role : new FormControl('',[Validators.required])
 });


 constructor(private adminService : AdminService) { }


 ngOnInit(): void {
     this.alertMessage = "Ajouté avec succès"
     this.alertType = "alert-success"
 }


 onSubmit() : void{

   if(this.modifierEnseignantForm.valid){

     const nom = this.modifierEnseignantForm.value.nom;
     const prenom = this.modifierEnseignantForm.value.prenom;
     const email = this.modifierEnseignantForm.value.email;
     const password = this.modifierEnseignantForm.value.password;
     const confirmPass = this.modifierEnseignantForm.value.confirmPass;
     const role = this.modifierEnseignantForm.value.role;
 
    this.adminService.ajouterUnEnseignant(nom,prenom,email,password,role)
 
     if(password != confirmPass){ 
       this.alert("Mot de passe sont différents" , "alert-danger")
       console.log("Alert mot de passe différents ")
     }
     else{
       this.adminService.ajouterUnEnseignant(nom,prenom,email,password,role).subscribe((data) => {
         console.log(data);
               if(data.success){
                 console.log("Alerte enseignant ajouté avec success")
                 this.alert(data.message,"alert-success")
                 this.modifierEnseignantForm.reset();
                 this.resetState()
               }
               else{
                 console.log("Alerte Echec lors de l'ajout de l'enseignant")
                 this.alert(data.message , "alert-danger")
               }
       });
     }
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
