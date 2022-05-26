import { FormationsService } from './../../../../../../../../services/formations/formations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-groupe',
  templateUrl: './create-groupe.component.html',
  styleUrls: ['./create-groupe.component.css']
})
export class CreateGroupeComponent implements OnInit {


  modules : any[] = [];

  constructor(private formationService : FormationsService) { }

  ngOnInit() {
      this.formationService.getAllFormations().subscribe((data) => {
             this.modules = data as [];
             console.log(this.modules)
      });
  }

}
