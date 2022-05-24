import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/users/admin/admin.service';

interface EnseignantInformations{
  id : string,
  nom : string,
  prenom : string,
  email : string,
  role : string,
}


@Component({
  selector: 'app-liste-enseignant',
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.css']
})


export class ListeEnseignantComponent implements OnInit {

  enseignants  : any;

  displayedColumns: string[] = ['Id', 'nom', 'prenom', 'email' , "role"];

  constructor(private adminService : AdminService) {
      
  }

  ngOnInit(): void {
      this.adminService.listeDeToutLesEnseignants().subscribe((data) => {
      this.enseignants = data as EnseignantInformations[];
      console.log("data retreived "  +this.enseignants[0])
     })
  }

  

}
