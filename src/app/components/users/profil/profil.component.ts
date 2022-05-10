import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/users/admin/admin.service';


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
     role : new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required , Validators.email]),
     password: new FormControl('',[Validators.required]),
     confirmPassword: new FormControl('',[Validators.required]),
   });
  
  
   constructor(private adminService : AdminService,private _snackBar : MatSnackBar) { }
  
  
   ngOnInit(): void {

       this.adminService.listeDesEnseignants().subscribe((data) => {
       });
   }
  
   selectEnseignant(){
    
   }
  
   onSubmit() : void{
  
     if(this.modificationProfilForm.valid){
     
   }
}

}
