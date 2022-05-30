import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifEnseignantComponent } from './recapitulatif-enseignant.component';

describe('RecapitulatifEnseignantComponent', () => {
  let component: RecapitulatifEnseignantComponent;
  let fixture: ComponentFixture<RecapitulatifEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapitulatifEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulatifEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
