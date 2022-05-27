import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/users/admin/admin.service';
import { AuthService } from './../../../../../../../../services/auths/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-groupe',
  templateUrl: './liste-groupe.component.html',
  styleUrls: ['./liste-groupe.component.css']
})
export class ListeGroupeComponent implements OnInit {


  constructor(
    private adminService : AdminService,
    private activateRoute: ActivatedRoute
    ){}



  groupeAttribuee : any[] = [];


  ngOnInit() {
      const idEnseignant : string | null = this.activateRoute.snapshot.paramMap.get("id");
      this.adminService.getGroupesAttribuerACetEnseignant(idEnseignant!).subscribe((data) => {
             this.groupeAttribuee = data as [];
      })
  }

}
