/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnseignantNvRecapitulatifActionsComponent } from './enseignant-nv-recapitulatif-actions.component';

describe('EnseignantNvRecapitulatifActionsComponent', () => {
  let component: EnseignantNvRecapitulatifActionsComponent;
  let fixture: ComponentFixture<EnseignantNvRecapitulatifActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantNvRecapitulatifActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantNvRecapitulatifActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
