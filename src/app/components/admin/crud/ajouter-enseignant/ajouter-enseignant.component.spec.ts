import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEnseignantComponent } from './ajouter-enseignant.component';

describe('AjouterEnseignantComponent', () => {
  let component: AjouterEnseignantComponent;
  let fixture: ComponentFixture<AjouterEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
