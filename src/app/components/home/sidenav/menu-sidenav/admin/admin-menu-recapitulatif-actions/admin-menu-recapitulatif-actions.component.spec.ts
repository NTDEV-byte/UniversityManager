import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuRecapitulatifActionsComponent } from './admin-menu-recapitulatif-actions.component';

describe('AdminMenuRecapitulatifActionsComponent', () => {
  let component: AdminMenuRecapitulatifActionsComponent;
  let fixture: ComponentFixture<AdminMenuRecapitulatifActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuRecapitulatifActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuRecapitulatifActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
