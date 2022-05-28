import { FormGroup, FormControl } from '@angular/forms';
import { FormationsService } from 'src/app/services/formations/formations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-inscription-detail',
  templateUrl: './nv-inscription-detail.component.html',
  styleUrls: ['./nv-inscription-detail.component.css']
})
export class NvInscriptionEnseignementDetailComponent implements OnInit {

  idEnseignementSelectionner : string | null;
  enseignementDetail : any;
  detailEnseignementForm = new FormGroup(
    {
      nombreCM : new FormControl('', []),
      nombreTD : new FormControl('', []),
      nombreTP : new FormControl('', []),
    });


  constructor(
    private formationsService : FormationsService,
    private activatedRoute : ActivatedRoute
    ){
    this.idEnseignementSelectionner =  this.activatedRoute.snapshot.paramMap.get("id")
    this.formationsService.getFormationById(this.idEnseignementSelectionner!).subscribe((data) => {
            this.enseignementDetail = data;
    })
  }

  ngOnInit() {

  }

}
