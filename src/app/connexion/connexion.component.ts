import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public onSubmit() : void{
    // logic to db and check data & redirection
    console.log("Email:  "+this.LoginForm.value.email);
    console.log("Password: "+this.LoginForm.value.password);
  }

}
