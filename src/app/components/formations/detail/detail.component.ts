import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {



  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get("nom"));

  }

}
