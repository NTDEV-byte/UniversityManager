/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NonVacataireUcComponent } from './non-vacataire-uc.component';

describe('NonVacataireUcComponent', () => {
  let component: NonVacataireUcComponent;
  let fixture: ComponentFixture<NonVacataireUcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonVacataireUcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVacataireUcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
