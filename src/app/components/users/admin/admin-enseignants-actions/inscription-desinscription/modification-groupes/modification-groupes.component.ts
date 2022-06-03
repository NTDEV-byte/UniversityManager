import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EnseignantService } from 'src/app/services/users/enseignant/enseignant.service';

@Component({
  selector: 'app-modification-groupes',
  templateUrl: './modification-groupes.component.html',
  styleUrls: ['./modification-groupes.component.css']
})


export class ModificationGroupesComponent implements OnInit {

  idEnseignantSelectionner : string | null;
  enseignementsEnseignants : any;

  constructor(
    private enseignantService : EnseignantService,
    private activatedRoute : ActivatedRoute,
    private snackBar : MatSnackBar,
    ){
      this.idEnseignantSelectionner =  this.activatedRoute.snapshot.paramMap.get("id")
    }

  ngOnInit() {
      this.enseignantService.getEnseignementGroupeDetailsEnseignant(this.idEnseignantSelectionner!).subscribe((data) => {
           this.enseignementsEnseignants = data as [];
           console.log(this.enseignementsEnseignants)
      })
  }





}
