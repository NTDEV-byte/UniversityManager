import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {


  constructor(private auth: AuthService , private router: Router){
  }

  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public onSubmit() : void{
    // logic to db and check data & redirection
    // console.log("Email:  "+this.LoginForm.value.email);
    // console.log("Password: "+this.LoginForm.value.password);
     
    if(this.LoginForm.value.password != '' && this.LoginForm.value.email){
      const email = this.LoginForm.value.email;
      const password = this.LoginForm.value.password;

        console.log("Password  & email not empty !");
        this.auth.findPrefecture(email , password).subscribe((data) => {
             console.log(data);
        });
       /* this.auth.registerUser(email,password).subscribe((data) => {
          console.log(data)
          if(data.success){
             // redirection to dashboard
            // this.router.navigate(['dashboard']);
          } 
        });*/
    }
  }

}
