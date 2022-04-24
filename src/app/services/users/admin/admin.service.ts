import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auths/auth.service';

interface AjoutInformationRetour {
   success : boolean,
   message : string,
}


@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  ajouterUnEnseignant(nom : string , prenom : string , email: string, password: string, role: string){
    console.log("Ajouter Enseignant Service")
    return  this.http.post<AjoutInformationRetour>(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/ajouterEnseignant" ,{
            nom,
            prenom,
            email,
            password,
            role,
    })
  }

  modifierUnEnseignant(){
      console.log("Modifier Enseignant Service")
      return this.http.post<AjoutInformationRetour>('/api/admin/modifierEnseignant',{})
  }

  supprimerUnEnseignant(){
    console.log("Supprimer Enseignant Service")
    return  this.http.post<AjoutInformationRetour>(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/supprimerEnseignant",{})
  }

  listeDesEnseignants(){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/listeEnseignant",{})
  }

}
