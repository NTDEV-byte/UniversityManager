import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../../../services/auths/auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {


  constructor(private authService: AuthService, private router: Router){
  }

  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public onSubmit() : void {
    if(this.LoginForm.value.password != '' && this.LoginForm.value.email){
      const email = this.LoginForm.value.email;
      const password = this.LoginForm.value.password;
  
        this.authService.logUserIn({email : email , password : password}).subscribe((data) => {
            if(data.success){
              console.log(data);
              this.authService.createUserDetails(
                {
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
                console.log("Informations incorrect !")
            }
        });
    }

    this.LoginForm.reset();
  }


}
