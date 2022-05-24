import { Component, OnInit } from '@angular/core';
import { FormationsService } from 'src/app/services/formations/formations.service';

@Component({
  selector: 'app-inscription-desinscription-detail',
  templateUrl: './inscription-desinscription-detail.component.html',
  styleUrls: ['./inscription-desinscription-detail.component.css']
})
export class InscriptionDesinscriptionDetailComponent implements OnInit {

  enseignements: any[] = [];

  constructor(private formationService : FormationsService) { }

  ngOnInit(): void {
   this.formationService.getAllFormations().subscribe((data) => {
        this.enseignements = data as [];
    });
  }

  test(enseignement : string){
    console.log(enseignement)
  }
}
