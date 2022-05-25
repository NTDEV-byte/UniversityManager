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
              this.authService.createUserDetails(
                {
                  id : data.id,
                  nom : data.nom ,
                  prenom: data.prenom , 
                  role : data.role , 
                  statut : data.statut,
                  email : data.email,
                  loggedIn : true
                }
              )
            this.router.navigate(['home']);
            }
            else{
                this.snackBar.open("Email ou mot de passe incorrect " , "Fermer");
            }
        });
    }
    this.LoginForm.reset();
  }


}
