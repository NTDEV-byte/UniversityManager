import { Component, OnInit } from '@angular/core';
import { FormationsService } from 'src/app/services/formations/formations.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Licence',
    children: [
      {name: 'Licence 1' , 
        children: [{name: "Semestre 1", } , {name : "Semestre 2"}]}, 
      {name: 'Licence 2',  
        children: [{name: "Semestre 3", } , {name : "Semestre 4"}]}, 
      {name: 'Licence 3',  
        children: [{name: "Semestre 5", } , {name : "Semestre 6"}]}, 
    ],
  },
  {
    name: 'Master',
    children: [
      {
        name: 'Master Informatique',
        children: [
                    {name: 'Informatique 1' ,
                     children: [{name : "Semester 1"} , {name : "Semester 2"}]}, 
                    {name: 'Informatique 2',
                     children: [{name : "Semester 3"} , {name : "Semester 4"}]}
                  ],
      },
      {
        name: 'Master Miage',
        children: [
          {name: 'Miage 1' ,
           children: [{name : "Semester 1"} , {name : "Semester 2"}]}, 
          {name: 'Miage 2',
           children: [{name : "Semester 3"} , {name : "Semester 4"}]} , 
        ],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})


export class FormationsComponent implements OnInit {
  

  formations : any[] = [];

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private formationService : FormationsService) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.formationService.getAllFormations().subscribe((data) => {
         console.log(data);
    });
  }
}
