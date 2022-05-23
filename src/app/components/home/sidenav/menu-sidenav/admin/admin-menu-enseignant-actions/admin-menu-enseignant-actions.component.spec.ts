import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuEnseignantActionsComponent } from './admin-menu-enseignant-actions.component';

describe('AdminMenuEnseignantActionsComponent', () => {
  let component: AdminMenuEnseignantActionsComponent;
  let fixture: ComponentFixture<AdminMenuEnseignantActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuEnseignantActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuEnseignantActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
