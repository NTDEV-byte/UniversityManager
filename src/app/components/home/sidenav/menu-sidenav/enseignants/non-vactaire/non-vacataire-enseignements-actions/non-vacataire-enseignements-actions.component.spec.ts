/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NonVacataireEnseignementsActionsComponent } from './non-vacataire-enseignements-actions.component';

describe('NonVacataireEnseignementsActionsComponent', () => {
  let component: NonVacataireEnseignementsActionsComponent;
  let fixture: ComponentFixture<NonVacataireEnseignementsActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonVacataireEnseignementsActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVacataireEnseignementsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
