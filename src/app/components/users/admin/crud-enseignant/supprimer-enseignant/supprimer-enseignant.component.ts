import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/users/admin/admin.service';

export interface Role{
  value : string,
  viewValue : string
}

@Component({
  selector: 'app-supprimer-enseignant',
  templateUrl: './supprimer-enseignant.component.html',
  styleUrls: ['./supprimer-enseignant.component.css']
})

export class SupprimerEnseignantComponent implements OnInit {

 enseignants : any;
 
 constructor(private adminService : AdminService , private snackBar : MatSnackBar , private router : Router) { }

 ngOnInit(): void {
     this.adminService.listeDeToutLesEnseignants().subscribe((data) => {
              this.enseignants = data as [];
     });
 }

 onSubmit(enseignant : any) : void{
     const id = enseignant._id;
     this.adminService.supprimerUnEnseignant({id}).subscribe((data) => {
               if(data.success){ 
                this.snackBar.open("Supprimé avec succès !" , "Fermer")
               }
               else{
                this.snackBar.open("Echec de la suppression !" , "Fermer")
               }
     });
        this.router.navigate(['admin/ajouterEnseignant']);
   }

}
