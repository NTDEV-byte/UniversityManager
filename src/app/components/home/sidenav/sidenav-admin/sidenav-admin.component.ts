import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auths/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.css']
})

export class SidenavAdminComponent implements OnInit {

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
