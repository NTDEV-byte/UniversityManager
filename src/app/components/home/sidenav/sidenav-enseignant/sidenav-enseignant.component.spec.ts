import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEnseignantComponent } from './sidenav-enseignant.component';

describe('SidenavEnseignantComponent', () => {
  let component: SidenavEnseignantComponent;
  let fixture: ComponentFixture<SidenavEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
