import { Component, OnInit } from '@angular/core';
import { FormationsService } from 'src/app/services/formations/formations.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';

 interface Formation {
  nom: string;
  children?: Formation[];
  url: string;
}

interface FormationExtensibleFlat {
  expandable: boolean;
  nom: string;
  level: number;
  url: string;
}
// /api/modules/{level}{num}/{semestre}{num}/

const FORMATIONS: Formation[] = [
  {
    nom: 'Licence',url: "",
    children: [
      {nom: 'Licence 1' , url: "",
        children: [
          {nom: "Semestre 1", url: FormationsService.LICENCE_1_S1,} , 
          {nom : "Semestre 2",url: FormationsService.LICENCE_1_S2,}
              ]},
      {nom: 'Licence 2', url: "",
        children: [
          {nom: "Semestre 3", url: FormationsService.LICENCE_2_S3} , 
          {nom : "Semestre 4", url: FormationsService.LICENCE_2_S4,}
              ]}, 
      {nom: 'Licence 3', url: "",  
        children: [
          {nom: "Semestre 5", url: FormationsService.LICENCE_3_S5,} , 
          {nom : "Semestre 6", url: FormationsService.LICENCE_3_S6,}
        ]}, 
    ],
  },
  {
    nom: 'Master', url: "",
    children: [
      {
        nom: 'Master Informatique', url: "",
        children: [
                    {nom: 'Informatique 1' , url: "",
                     children: [
                       {nom : "Semester 1", url: FormationsService.MASTER_1_INFORMATIQUE_S1,} , 
                       {nom : "Semester 2", url: FormationsService.MASTER_1_INFORMATIQUE_S2,}]}, 
                    {nom: 'Informatique 2', url: "",
                     children: [
                       {nom : "Semester 3", url: FormationsService.MASTER_2_INFORMATIQUE_S3,}, 
                       {nom : "Semester 4", url: FormationsService.MASTER_2_INFORMATIQUE_S4,}]}
                  ],
      },
      {
        nom: 'Master Miage', url: "",
        children: [
          {nom: 'Miage 1' , url: "",
           children: [
             {nom : "Semester 1", url: FormationsService.MASTER_1_MIAGE_S1,} , 
             {nom : "Semester 2", url: FormationsService.MASTER_1_MIAGE_S2,}]}, 
           {nom: 'Miage 2', url: "",
           children: [
             {nom : "Semester 3", url: FormationsService.MASTER_2_MIAGE_S3 ,},
             {nom : "Semester 4", url: FormationsService.MASTER_2_MIAGE_S4,}]} , 
        ],
      },
    ],
  },
];


@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})


export class FormationsComponent implements OnInit {
  

  formations : any[] = [];

  private _transformer = (node: Formation, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      nom: node.nom,
      level: level,
      url: node.url
    };
  };

  treeControl = new FlatTreeControl<FormationExtensibleFlat>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl,this.treeFlattener);

  constructor(private formationService : FormationsService, private router : Router) {
    this.dataSource.data = FORMATIONS;
  }

  hasChild = (_: number, node: FormationExtensibleFlat) => node.expandable;

  ngOnInit(): void {
    
  }


  getFormationSelected(formation : any){
      this.router.navigate(['/formation/detail', formation]);
  }
}
