import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface LoginData{
    success: boolean,
    message: string
}

interface registerResponse{
     success: boolean,
     message: string
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

  findPrefecture(email : string , password: string){
     return this.http.post<registerResponse>(this.SERVER_EXPRESS_IP_PORT+"/prefInfo" , {email,password});
  }

  logUserIn(email : string,password : string){
     return this.http.post<LoginData>(this.SERVER_EXPRESS_IP_PORT+'/api/login' , {
        email,
        password
     })
  }

  registerUser(email : string,password : string){
      return this.http.post<registerResponse>(this.SERVER_EXPRESS_IP_PORT+'/routeTest',{
          email,
          password
      });

  }
}
