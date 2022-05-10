import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ILoginResponseData {
    nom: string,
    prenom: string,
    email: string,
    role : string
    success: boolean,
    message: string,
}

export interface IUserInformation {
   nom : string,
   prenom: string,
   email: string,
   role : string,
   loggedIn: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

public static SERVER_EXPRESS_IP_PORT : string = "http://localhost:8888";

private user : IUserInformation = {nom : ''  , prenom: '' , email: '',  role : '' , loggedIn : false};

constructor(private http: HttpClient) { }

createUserDetails(informationUser : IUserInformation){
    this.user = informationUser;
}

logUserIn(email : string, password : string){
   return this.http.post<ILoginResponseData>(AuthService.SERVER_EXPRESS_IP_PORT+'/api/auths/login' , {
      email,
      password
   })
}

setLoggedIn(value : boolean){
    this.user.loggedIn = value;
}

logout(){
    this.user.nom = "";
    this.user.prenom = "";
    this.user.email = "";
    this.user.role = "";
    this.user.loggedIn = false;
}

get isLoggedIn(){
  return this.user.loggedIn;
}

get getUserDetails(){
      return this.user;
}

  

}
