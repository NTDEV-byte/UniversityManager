import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminService } from '../users/admin/admin.service';

interface LoginResponseData {
    success: boolean,
    message: string,
    role : string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public static SERVER_EXPRESS_IP_PORT : string = "http://localhost:8888";

  private loggedIn = false;

  constructor(private http: HttpClient) { }

  get isLoggedIn(){
    return this.loggedIn;
  }

   setLoggedIn(value : boolean){
      this.loggedIn = value
  }

  logUserIn(email : string, password : string){
     return this.http.post<LoginResponseData>(AuthService.SERVER_EXPRESS_IP_PORT+'/api/auths/login' , {
        email,
        password
     })
  }

}
