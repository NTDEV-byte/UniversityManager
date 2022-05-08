import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ILoginResponseData {
    nom: string,
    prenom: string,
    success: boolean,
    message: string,
    role : string
}


export interface IUserInformation {
   nom : string,
   prenom: string,
   role : string,
   loggedIn: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public static SERVER_EXPRESS_IP_PORT : string = "http://localhost:8888";


  private user : IUserInformation = {nom : ''  , prenom: '' , role : '' , loggedIn : false};


  constructor(private http: HttpClient) { }

  get isLoggedIn(){
    return this.user.loggedIn;
  }

   setLoggedIn(value : boolean){
    this.user.loggedIn = value;
  }

  get getUserDetails(){
      return this.user;
  }

  createUserDetails(informationUser : IUserInformation){
      this.user = informationUser;
  }

  logUserIn(email : string, password : string){
     return this.http.post<ILoginResponseData>(AuthService.SERVER_EXPRESS_IP_PORT+'/api/auths/login' , {
        email,
        password
     })
  }

}
