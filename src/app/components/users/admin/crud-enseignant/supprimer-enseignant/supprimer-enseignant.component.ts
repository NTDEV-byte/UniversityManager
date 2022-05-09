import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
 
 constructor(private adminService : AdminService , private snackBar : MatSnackBar) { }

 ngOnInit(): void {
     this.adminService.listeDesEnseignants().subscribe((data) => {
              this.enseignants = data as [];
     });
 }


 onSubmit(enseignant : any) : void{
     const id = enseignant._id;
     this.adminService.supprimerUnEnseignant(id).subscribe((data) => {
               if(data.success){ 
                this.snackBar.open("Supprimé avec succès !" , "Fermer")
               }
               else{
                this.snackBar.open("Echec de la suppression !" , "Fermer")
               }
     });
     setInterval(() => {
      window.location.reload();
     } , 2000)
   }

}
