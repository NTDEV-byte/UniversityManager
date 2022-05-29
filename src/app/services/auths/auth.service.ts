import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ISendLoginData {
      email : string,
      password:  string,
}

export interface IResponseLoginData {
    id : string,
    nom: string,
    prenom: string,
    email: string,
    role : string,
    statut : string,
    success: boolean,
    message: string,
}

export interface IUserInformation {
   id : string,
   nom : string,
   prenom: string,
   email: string,
   role : string,
   statut : string,
   loggedIn: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

public static SERVER_EXPRESS_IP_PORT : string = "http://localhost:8888";


constructor(private http: HttpClient) {
    this.setLoginStartValue(true)
    console.log(this.getUserDetails);
}

createUserDetails(informationUser : IUserInformation){
    localStorage.setItem("UserDetails",JSON.stringify(informationUser));
}

logUserIn(information : ISendLoginData){
  const {email  , password} = information
  return this.http.post<IResponseLoginData>(AuthService.SERVER_EXPRESS_IP_PORT+'/api/auths/login' , {
      email,
      password
   })
}


setLoggedIn(value : boolean){
  const data = JSON.parse(localStorage.getItem('UserDetails')!);
  data.loggedIn = value;
}

logout(){
    localStorage.clear();
}

get isLoggedInUser(){
  return JSON.parse(localStorage.getItem('UserDetails')!).loggedIn;
}

get getUserDetails(){
    if(localStorage.length > 0){
      return JSON.parse(localStorage.getItem('UserDetails')!);
    }
    return null;
}


//Temporaire use only when app starting

get getLogInStartValue(){
  return JSON.parse(localStorage.getItem("logInStartShowing")!).value
}

setLoginStartValue(value : boolean){
localStorage.setItem("logInStartShowing" , JSON.stringify({value : value}))
}

}
