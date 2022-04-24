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

  constructor(private adminService : AdminService) {
      
  }

  ngOnInit(): void {
     this.adminService.listeDesEnseignants().subscribe((data) => {
      this.enseignants = data as [];
      console.log(this.enseignants)
     })
  }

  

}
