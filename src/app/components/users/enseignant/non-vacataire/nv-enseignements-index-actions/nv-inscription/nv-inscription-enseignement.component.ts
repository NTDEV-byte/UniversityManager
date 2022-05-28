import { FormationsService } from 'src/app/services/formations/formations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-inscription-enseignement',
  templateUrl: './nv-inscription-enseignement.component.html',
  styleUrls: ['./nv-inscription-enseignement.component.css']
})
export class NvInscriptionEnseignementComponent implements OnInit {

  enseignements : any[] = []

  constructor(private formationService : FormationsService) { }

  ngOnInit(): void {
       this.formationService.getAllFormations().subscribe((data) => {
             this.enseignements = data as [];
       })
  }

}
