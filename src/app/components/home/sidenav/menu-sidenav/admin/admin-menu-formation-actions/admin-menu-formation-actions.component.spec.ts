import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuFormationActionsComponent } from './admin-menu-formation-actions.component';

describe('AdminMenuFormationActionsComponent', () => {
  let component: AdminMenuFormationActionsComponent;
  let fixture: ComponentFixture<AdminMenuFormationActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuFormationActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuFormationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
