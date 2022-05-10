import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auths/auth.service';

export interface ISendModificationInformation {
      id : string,
      nom: string,
      prenom: string,
      email: string,
      password: string,
}

export interface IReponseModificationProfil {
      message: string,
      success : boolean,
}

@Injectable({
  providedIn: 'root'
})

export class SharedUsersService {

  constructor(private http: HttpClient) {}


  modifyProfil(information : ISendModificationInformation ){

      const {id,nom,prenom,email,password} = information; 
      
      return this.http.post<IReponseModificationProfil>(AuthService.SERVER_EXPRESS_IP_PORT+"/api/shared/modificationProfil",{
          id,
          nom,
          prenom,
          email,
          password
      });
  }
}
