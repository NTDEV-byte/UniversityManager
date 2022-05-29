import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auths/auth.service';
import { EnseignantService } from 'src/app/services/users/enseignant/enseignant.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-nv-list-modules-enseignees',
  templateUrl: './nv-list-modules-enseignees.component.html',
  styleUrls: ['./nv-list-modules-enseignees.component.css']
})
export class NvListModulesEnseigneesComponent implements OnInit {

  enseignements : any[] = []

  constructor(
    private enseignantService : EnseignantService,
    private authService : AuthService,
    private snackBar : MatSnackBar
    ) { }

  ngOnInit() {
       this.enseignantService.getEnseignementsPrisEnCharges(this.authService.getUserDetails.id).subscribe((data) =>{
               this.enseignements = data as [];
               console.log(this.enseignements);

       })
  }

  desinscription(enseignement: any){
   this.enseignantService.desinscireEnseignement(enseignement["_id"]).subscribe((data) => {
          if(data.success){
            this.snackBar.open(data.message , "Fermer")
          }
          else{
            this.snackBar.open(data.message , "Fermer")
          }
      })
  }

}
