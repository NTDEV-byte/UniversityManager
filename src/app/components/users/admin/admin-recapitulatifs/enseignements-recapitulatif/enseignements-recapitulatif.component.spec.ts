import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementsRecapitulatifComponent } from './enseignements-recapitulatif.component';

describe('EnseignementsRecapitulatifComponent', () => {
  let component: EnseignementsRecapitulatifComponent;
  let fixture: ComponentFixture<EnseignementsRecapitulatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignementsRecapitulatifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementsRecapitulatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
