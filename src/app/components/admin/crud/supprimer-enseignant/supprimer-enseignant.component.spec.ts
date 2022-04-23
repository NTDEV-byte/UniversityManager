import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerEnseignantComponent } from './supprimer-enseignant.component';

describe('SupprimerEnseignantComponent', () => {
  let component: SupprimerEnseignantComponent;
  let fixture: ComponentFixture<SupprimerEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
