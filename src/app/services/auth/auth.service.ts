import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface LoginData{
    success: boolean,
    message: string,
    role : string
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private SERVER_EXPRESS_IP_PORT : string = "http://localhost:8888";

  private loggedIn = false;

  constructor(private http: HttpClient) { }


  get isLoggedIn(){
    return this.loggedIn;
  }

   setLoggedIn(value : boolean){
      this.loggedIn = value
  }

  logUserIn(email : string,password : string){
     return this.http.post<LoginData>(this.SERVER_EXPRESS_IP_PORT+'/api/login' , {
        email,
        password
     })
  }

}
