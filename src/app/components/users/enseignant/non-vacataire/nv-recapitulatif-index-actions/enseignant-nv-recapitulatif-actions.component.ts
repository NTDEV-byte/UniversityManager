import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../../../../services/auths/auth.service';
import { EnseignantService } from 'src/app/services/users/enseignant/enseignant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant-nv-recapitulatif-actions',
  templateUrl: './enseignant-nv-recapitulatif-actions.component.html',
  styleUrls: ['./enseignant-nv-recapitulatif-actions.component.css']
})
export class EnseignantNvRecapitulatifActionsComponent implements OnInit {

  recapitulatifData: any[]= []

  constructor(
    private enseignantService : EnseignantService,
    private authService : AuthService,
    private snackBar : MatSnackBar
    ) {
    this.enseignantService.recapitulatifEnseignant(this.authService.getUserDetails.id).subscribe((data) => {
          if(data){
            this.recapitulatifData = data as [];
            console.log(this.recapitulatifData);
          }
          else{
             snackBar.open("Information Indisponible !" , "Fermer", {duration  : 2000})
          }
    })
  }

  ngOnInit() {
  }

}
