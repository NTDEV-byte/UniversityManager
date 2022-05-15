import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auths/auth.service';
import { SharedUsersService } from 'src/app/services/users/shared/shared-users.service';


export interface Role{
  value : string,
  viewValue : string
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {

    formSubmitted : boolean = false;
  
    modificationProfilForm = new FormGroup({
     nom: new FormControl('',[Validators.required]),
     prenom: new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required , Validators.email]),
     password: new FormControl('',[Validators.required]),
     confirmPassword: new FormControl('',[Validators.required]),
   });
  
   constructor(private authService : AuthService, private sharedUsersService : SharedUsersService, private _snackBar : MatSnackBar) { }
  
   ngOnInit(): void {
       this.fillFormWithConnectedUserInformation()
   }
  
   fillFormWithConnectedUserInformation(){
       const {nom,prenom,email} = this.authService.getUserDetails;
       this.modificationProfilForm.controls['nom'].setValue(nom);
       this.modificationProfilForm.controls['prenom'].setValue(prenom);
       this.modificationProfilForm.controls['email'].setValue(email);
   }
  
   onSubmit() : void{
    
     if(this.modificationProfilForm.valid){


        this.sharedUsersService.modifyProfil(
          {
            id : this.authService.getUserDetails.id,
            nom : this.modificationProfilForm.value.nom , 
            prenom : this.modificationProfilForm.value.prenom , 
            email: this.modificationProfilForm.value.email , 
            password : this.modificationProfilForm.value.password
          }).subscribe((data) => {

              if(data.success){
                  console.log("Success !");
                  this._snackBar.open("Profil modifié avec succès" , "Fermer")
                  
              }
              else{
                 this._snackBar.open("Echec de la modification du profil","Femer")
                console.log("Failed !");
              }

          });

          this.modificationProfilForm.reset();
   }
}

}
