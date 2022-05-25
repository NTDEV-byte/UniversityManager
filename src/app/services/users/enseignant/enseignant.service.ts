import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from "../../auths/auth.service";


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient) {}

  getEnseignantInformationById(enseignantID : string) {
       return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/enseignant/informations" , {
              enseignantID : enseignantID
       })
  }

  getListModulesEnseignees(enseignantID : string) {
       return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/enseignant/modulesEnseignee" , {
              enseignantID : enseignantID
       })
  }

}
