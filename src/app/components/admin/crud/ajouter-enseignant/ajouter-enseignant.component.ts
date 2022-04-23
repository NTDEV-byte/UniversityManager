import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})


export class AjouterEnseignantComponent implements OnInit {

  ajouteAdminForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPass: new FormControl('')
  });



  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    
    
    console.log(this.ajouteAdminForm.value.nom)
    console.log(this.ajouteAdminForm.value.prenom)
    console.log(this.ajouteAdminForm.value.email)
    console.log(this.ajouteAdminForm.value.password)
    console.log(this.ajouteAdminForm.value.confirmPass)
    console.log("Submitted !")
  }

}
