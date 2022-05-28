import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from "../../auths/auth.service";

export interface ISendInscriptionEnseignantEnseignement{
        idEnseignant : string,
        idEnseignement: string,
        nombreCM : number,
        nombreTD: number,
        nombreTP: number
}

export interface IResponse{
    success : boolean,
    message: string
}

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

  inscriptionEnseignantModule(information : ISendInscriptionEnseignantEnseignement){
      const {idEnseignant,idEnseignement,nombreCM,nombreTD,nombreTP} = information;
      return this.http.post<IResponse>(AuthService.SERVER_EXPRESS_IP_PORT+"/api/enseignant/inscriptionEnseignantEnseignement" , {
            idEnseignant : idEnseignant,
            idEnseignement: idEnseignement,
            nombreCM: nombreCM,
            nombreTD: nombreTD,
            nombreTP: nombreTP
      })
  }

}
