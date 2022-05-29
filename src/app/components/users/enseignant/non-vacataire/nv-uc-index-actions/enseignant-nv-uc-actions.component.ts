import { AuthService } from './../../../../../services/auths/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EnseignantService } from './../../../../../services/users/enseignant/enseignant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant-nv-uc-actions',
  templateUrl: './enseignant-nv-uc-actions.component.html',
  styleUrls: ['./enseignant-nv-uc-actions.component.css']
})
export class EnseignantNvUcActionsComponent implements OnInit {


  ucForm = new FormGroup({uc : new FormControl("",[Validators.required])})

  constructor(
    private authService : AuthService,
    private enseignantService : EnseignantService,
    private matSnackBar : MatSnackBar
    ) {}

  ngOnInit() {
  }

  RenseignementUC(){
     this.enseignantService.renseignementUC(this.authService.getUserDetails.id,this.ucForm.value.uc).subscribe((data) => {
      if(data.success){
         this.matSnackBar.open(data.message , "Fermer")
       }
       else {
         this.matSnackBar.open(data.message , "Fermer")
          }
      })
  }

}
