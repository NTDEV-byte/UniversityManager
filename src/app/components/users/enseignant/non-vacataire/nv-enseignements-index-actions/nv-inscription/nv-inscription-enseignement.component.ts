import { AuthService } from 'src/app/services/auths/auth.service';
import { EnseignantService } from 'src/app/services/users/enseignant/enseignant.service';
import { FormationsService } from 'src/app/services/formations/formations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-inscription-enseignement',
  templateUrl: './nv-inscription-enseignement.component.html',
  styleUrls: ['./nv-inscription-enseignement.component.css']
})
export class NvInscriptionEnseignementComponent implements OnInit {

  enseignements : any[] = []
  enseignementEnseigneeParCetEnseignant  : any = []
  enseignementNonEnseigneeParCetEnseignant : any = []

  constructor(
    private AuthService : AuthService,
    private formationService : FormationsService,
    private enseignantService : EnseignantService) { }

  ngOnInit(): void {
       this.formationService.getAllFormations().subscribe((data) => {
             this.enseignements = data as [];
                this.enseignantService.getListModulesEnseignees(this.AuthService.getUserDetails.id).subscribe((data) => {
                      this.enseignementEnseigneeParCetEnseignant = data as [];

                       this.enseignementNonEnseigneeParCetEnseignant = this.enseignements.filter(
                          a => !this.enseignementEnseigneeParCetEnseignant
                                    .map((b: any)=>b["_id"])
                                    .includes(a["_id"])
                       )
                })

       })


  }

}
