import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantComponent } from './enseignant.component';

describe('EnseignantComponent', () => {
  let component: EnseignantComponent;
  let fixture: ComponentFixture<EnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
