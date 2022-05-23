import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVacataireMenuComponent } from './non-vacataire-menu.component';

describe('NonVacataireMenuComponent', () => {
  let component: NonVacataireMenuComponent;
  let fixture: ComponentFixture<NonVacataireMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVacataireMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVacataireMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
