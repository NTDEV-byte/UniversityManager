import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auths/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private http: HttpClient) { }
  
  getAllFormations(){
    return this.http.post(AuthService.SERVER_EXPRESS_IP_PORT+"/api/modules/getAllFormations", {});
  }

}
