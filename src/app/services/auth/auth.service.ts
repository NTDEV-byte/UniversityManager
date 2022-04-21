import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface myData{
    success: boolean,
    message: string
}

interface registerResponse{
     success : boolean
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

  findPrefecture(username : string , password: string){
     return this.http.post<registerResponse>(this.SERVER_EXPRESS_IP_PORT+"/prefInfo" , {username,password});
  }

  getUserDetails(username : string,password : string){
     return this.http.post<myData>(this.SERVER_EXPRESS_IP_PORT+'/api/auth.php' , {
        username,
        password
     })
  }

  registerUser(username : string,password : string){
      return this.http.post<registerResponse>(this.SERVER_EXPRESS_IP_PORT+'/routeTest',{
          username,
          password
      });

  }
}
