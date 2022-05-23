import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVacataireComponent } from './non-vacataire.component';

describe('NonVacataireComponent', () => {
  let component: NonVacataireComponent;
  let fixture: ComponentFixture<NonVacataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVacataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVacataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
