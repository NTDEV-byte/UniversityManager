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

  modifierUnEnseignant(id : string , nom : string , prenom: string , email: string, role: string){
      console.log("Modifier Enseignant Service")
      return this.http.post<AjoutInformationRetour>(AuthService.SERVER_EXPRESS_IP_PORT+'/api/admin/modifierEnseignant',{
        id,
        nom,
        prenom,
        email,
        role
      })
  }

  supprimerUnEnseignant(id : string){
    console.log("Supprimer un Enseignant");
    return this.http.post<AjoutInformationRetour>(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/supprimerEnseignant",{
      id
    })
  }

  listeDesEnseignants(){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/listeEnseignant",{})
  }
}
