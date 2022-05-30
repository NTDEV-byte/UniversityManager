import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/users/admin/admin.service';
@Component({
  selector: 'app-admin-menu-recapitulatif-actions',
  templateUrl: './admin-menu-recapitulatif-actions.component.html',
  styleUrls: ['./admin-menu-recapitulatif-actions.component.css']
})
export class AdminMenuRecapitulatifActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
