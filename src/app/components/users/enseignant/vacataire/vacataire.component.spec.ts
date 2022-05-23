import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacataireComponent } from './vacataire.component';

describe('VacataireComponent', () => {
  let component: VacataireComponent;
  let fixture: ComponentFixture<VacataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
