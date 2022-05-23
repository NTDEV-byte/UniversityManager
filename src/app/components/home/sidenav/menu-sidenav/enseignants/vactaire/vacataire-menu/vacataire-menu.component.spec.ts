import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacataireMenuComponent } from './vacataire-menu.component';

describe('VacataireMenuComponent', () => {
  let component: VacataireMenuComponent;
  let fixture: ComponentFixture<VacataireMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacataireMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacataireMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
