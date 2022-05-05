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
          {nom: "Semestre 1", url: "/licence1/semestre1",} , 
          {nom : "Semestre 2",url: "/licence1/semestre2",}
              ]},
      {nom: 'Licence 2', url: "",
        children: [
          {nom: "Semestre 3", url: "/licence2/semestre3"} , 
          {nom : "Semestre 4", url: "/licence2/semestre4",}
              ]}, 
      {nom: 'Licence 3', url: "",  
        children: [
          {nom: "Semestre 5", url: "/licence3/semestre5", } , 
          {nom : "Semestre 6", url: "/licence3/semestre6",}
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
                       {nom : "Semester 1", url: "/master-1-informatique/semestre1",} , 
                       {nom : "Semester 2", url: "/master-1-informatique/semestre2",}]}, 
                    {nom: 'Informatique 2', url: "",
                     children: [
                       {nom : "Semester 3", url: "/master-2-informatique/semestre3",}, 
                       {nom : "Semester 4", url: "/master-2-informatique/semestre4",}]}
                  ],
      },
      {
        nom: 'Master Miage', url: "",
        children: [
          {nom: 'Miage 1' , url: "",
           children: [
             {nom : "Semester 1", url: "/master-1-miage/semestre1",} , 
             {nom : "Semester 2", url: "/master-1-miage/semestre2",}]}, 
          {nom: 'Miage 2', url: "",
           children: [
             {nom : "Semester 3", url: "/master-2-miage/semestre3",},
             {nom : "Semester 4", url: "/master-2-miage/semestre4",}]} , 
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
    this.formationService.getAllFormations().subscribe((data) => {
         console.log(data);
    });
  }


  getFormationSelected(formation : any){
      console.log(formation);
      this.router.navigate(['/formation/detail', formation]);
  }
}
