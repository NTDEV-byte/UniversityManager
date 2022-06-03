import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auths/auth.service';
import { Router } from '@angular/router';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private observer : BreakpointObserver ,
    public authService : AuthService ,
    private router : Router,
    private lowerPipe : LowerCasePipe) {
   }

  ngOnInit(): void {
      if(this.lowerPipe.transform(this.authService.getUserDetails.role) == "admin"){
              this.router.navigate(['/admin/EnseignantActions'])
      }
      if(this.lowerPipe.transform(this.authService.getUserDetails.role) == "enseignant"){
              this.router.navigate(['/EnseignantNV/EnseignementIndex'])
      }
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
      this.authService.setLoginStartValue(true)
      this.router.navigate(['/connexion']);
  }

}
