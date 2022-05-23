import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormationsService } from 'src/app/services/formations/formations.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  modules : any;

  constructor(private route: ActivatedRoute,private formationService : FormationsService) { }

  ngOnInit(): void {
    let urlRoute : string | null = this.route.snapshot.paramMap.get("url") ;
    this.formationService.getModulesByNiveauSemestre({formation: urlRoute!})?.subscribe((data) => {
             this.modules = data as [];
    });
  }
}
