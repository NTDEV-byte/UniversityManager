import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService} from '../../../services/auths/auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {


  constructor(private authService: AuthService, private router: Router , private snackBar : MatSnackBar){
  }

  LoginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  public onSubmit() : void {


    if(this.LoginForm.valid){


      const email = this.LoginForm.value.email;
      const password = this.LoginForm.value.password;
      
        this.authService.logUserIn({email : email , password : password}).subscribe((data) => {
            if(data.success){
              console.log(data);
              this.authService.createUserDetails(
                {
                  id : data.id,
                  nom : data.nom ,
                  prenom: data.prenom , 
                  role : data.role , 
                  email : data.email,
                  loggedIn : true
                }
              )
              if(data.role.toLowerCase() == 'admin'){
                this.router.navigate(['/admin/ajouterEnseignant'])
              }
              else{
                this.router.navigate(['enseignant'])
              }
              this.authService.setLoggedIn(true)
              console.log("Connexion réussi !")
              console.log("role: "+data.role)
            }

            else{
                this.snackBar.open("Email ou mot de passe incorrect " , "Fermer");
                console.log("Informations incorrect !")
            }
        });
    }

    this.LoginForm.reset();
  }


}
