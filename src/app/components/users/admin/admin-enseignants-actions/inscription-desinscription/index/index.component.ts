import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/users/admin/admin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  enseignants : any;

 constructor(private adminService : AdminService , private snackBar : MatSnackBar , private router : Router) { }

 ngOnInit(): void {
     this.adminService.listeDeToutLesEnseignants().subscribe((data) => {
              this.enseignants = data as [];
     });
 }

}
