import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvInscriptionEnseignementComponent } from './nv-inscription-enseignement.component';

describe('NvInscriptionEnseignementComponent', () => {
  let component: NvInscriptionEnseignementComponent;
  let fixture: ComponentFixture<NvInscriptionEnseignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvInscriptionEnseignementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvInscriptionEnseignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
