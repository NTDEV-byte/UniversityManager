import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auths/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer : BreakpointObserver , public authService : AuthService , private router : Router) {
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if(res.matches){
            this.sidenav.mode = 'over';
            this.sidenav.close();
        }
        else{
            this.sidenav.mode = 'side';
            this.sidenav.open();
        }
    })
   }

   deconnexion(){
      this.authService.logout()
      this.router.navigate(['/connexion']);
  }

}
