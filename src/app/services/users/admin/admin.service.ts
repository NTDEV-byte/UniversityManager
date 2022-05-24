import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectId } from 'mongodb';
import { AuthService } from '../../auths/auth.service';

export interface ISendAjouteEnseignant {
    nom : string,
    prenom : string,
    email : string,
    password : string,
    statut : string,
    role : string,
}

export interface ISendModificationEnseignant {
  id : string,
  nom : string,
  prenom : string,
  email : string,
  statut : string,
  role : string
}

export interface ISendSuppressionEnseignant {
    id : string
}

export interface ISendAjoutEnseignantModule{
    idEnseignant : string,
    modulesIDs: string[]
}


export interface IAjoutInformationRetour {
   success : boolean,
   message : string,
}

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  ajouterUnEnseignant(information: ISendAjouteEnseignant){
    const {nom , prenom , email , password , statut ,role} = information;
    console.log("Ajouter Enseignant Service")
    return  this.http.post<IAjoutInformationRetour>(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/ajouterEnseignant" ,{
            nom,
            prenom,
            email,
            password,
            statut,
            role,
    })
  }

  modifierUnEnseignant(information : ISendModificationEnseignant){

    const {id , nom , prenom , email , statut, role} = information;
      console.log("Modifier Enseignant Service")
      return this.http.post<IAjoutInformationRetour>(AuthService.SERVER_EXPRESS_IP_PORT+'/api/admin/modifierEnseignant',{
        id,
        nom,
        prenom,
        email,
        role
      })
  }

  supprimerUnEnseignant(information : ISendSuppressionEnseignant){
    const {id} = information;
    console.log("Supprimer un Enseignant");
    return this.http.post<IAjoutInformationRetour>(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/supprimerEnseignant",{
      id
    })
  }

  listeDeToutLesEnseignants(){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/listeEnseignant",{})
  }

  inscriptionEnseignantModules(information : ISendAjoutEnseignantModule){
      const {idEnseignant , modulesIDs} = information;
      console.log(idEnseignant)
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/admin/inscriptionEnseignantModules",
       {
          idEnseignant : idEnseignant,
          modulesIDs: modulesIDs
       })
  }

}
