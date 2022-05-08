import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auths/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {


  public static LICENCE_1_S1 : string = "/licence1/semestre1";
  public static LICENCE_1_S2 : string = "/licence1/semestre2";

  public static LICENCE_2_S3 : string = "/licence2/semestre3";
  public static LICENCE_2_S4 : string = "/licence2/semestre4";
  
  public static LICENCE_3_S5 : string = "/licence3/semestre5";
  public static LICENCE_3_S6 : string = "/licence3/semestre6";

  public static MASTER_1_INFORMATIQUE_S1 : string = "/master-1-informatique/semestre1";
  public static MASTER_1_INFORMATIQUE_S2 : string = "/master-1-informatique/semestre2";

  public static MASTER_2_INFORMATIQUE_S3 : string = "/master-2-informatique/semestre3";
  public static MASTER_2_INFORMATIQUE_S4 : string = "/master-2-informatique/semestre4";

  public static MASTER_1_MIAGE_S1 : string = "/master-1-miage/semestre1";
  public static MASTER_1_MIAGE_S2 : string = "/master-1-miage/semestre2";

  public static MASTER_2_MIAGE_S3 : string = "/master-2-miage/semestre3";
  public static MASTER_2_MIAGE_S4 : string = "/master-2-miage/semestre4";


  constructor(private http: HttpClient) { }
  
  getAllFormations(){
    return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getAllFormations", {});
  }

  getModulesByNiveauSemestre(information: string){
    if(information == FormationsService.LICENCE_1_S1){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Licence' , semestre : '1'});
    }
    else if(information == FormationsService.LICENCE_1_S2){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Licence' , semestre : '2'});
    }
    else if(information == FormationsService.LICENCE_2_S3){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Licence' , semestre : '3'});
    }
    else if(information == FormationsService.LICENCE_2_S4){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Licence' , semestre : '4'});
    }
    else if(information == FormationsService.LICENCE_3_S5){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'licence' , semestre : '5'});
    }
    else if(information == FormationsService.LICENCE_3_S6){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Licence' , semestre : '6'});
    }
    
    else if(information == FormationsService.MASTER_1_INFORMATIQUE_S1){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Master Info' , semestre : '1'});
    }
    else if(information == FormationsService.MASTER_1_INFORMATIQUE_S2){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Master Info' , semestre : '2'});
    }
    else if(information == FormationsService.MASTER_2_INFORMATIQUE_S3){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Master Info' , semestre : '3'});
    }
    else if(information == FormationsService.MASTER_2_INFORMATIQUE_S4){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Master Info' , semestre : '4'});
    }

    else if(information == FormationsService.MASTER_1_MIAGE_S1){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Master Miage' , semestre : '1'});
    }
    else if(information == FormationsService.MASTER_1_MIAGE_S2){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Master Miage' , semestre : '2'});
    }
    else if(information == FormationsService.MASTER_2_MIAGE_S3){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Master Miage' , semestre : '3'});
    }
    else if(information == FormationsService.MASTER_2_MIAGE_S4){
      return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getFormationSemetre", {formation : 'Master Miage' , semestre : '4'});
    }
   return null;

   
  }

}
