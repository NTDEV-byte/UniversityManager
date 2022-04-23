import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/users/admin/admin.service';

@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})

export class AjouterEnseignantComponent implements OnInit {

   formSubmitted : boolean = false;
   alertMessage: String = "";
   alertType : String = "";


   ajouteAdminForm = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPass: new FormControl('',[Validators.required]),
    role : new FormControl('',[Validators.required])
  });


  constructor(private adminService : AdminService) { }


  ngOnInit(): void {
      this.alertMessage = "Ajouté avec succés"
      this.alertType = "alert-success"
  }


  onSubmit() : void{

    if(this.ajouteAdminForm.valid){

      const nom = this.ajouteAdminForm.value.nom;
      const prenom = this.ajouteAdminForm.value.prenom;
      const email = this.ajouteAdminForm.value.email;
      const password = this.ajouteAdminForm.value.password;
      const confirmPass = this.ajouteAdminForm.value.confirmPass;
      const role = this.ajouteAdminForm.value.role;
  
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
                  this.ajouteAdminForm.reset();
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


}
