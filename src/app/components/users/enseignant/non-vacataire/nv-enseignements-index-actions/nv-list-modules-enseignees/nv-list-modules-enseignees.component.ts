import { AuthService } from 'src/app/services/auths/auth.service';
import { EnseignantService } from 'src/app/services/users/enseignant/enseignant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-list-modules-enseignees',
  templateUrl: './nv-list-modules-enseignees.component.html',
  styleUrls: ['./nv-list-modules-enseignees.component.css']
})
export class NvListModulesEnseigneesComponent implements OnInit {

  enseignements : any[] = []

  constructor(
    private enseignantService : EnseignantService,
    private  authService : AuthService
    ) { }

  ngOnInit() {

    console.log("ID: Enseignant " + this.authService.getUserDetails.id)
       this.enseignantService.getEnseignementsPrisEnCharges(this.authService.getUserDetails.id).subscribe((data) =>{
               this.enseignements = data as [];
               this.enseignements = this.enseignements[0]["teaches"]

       })
  }

}
