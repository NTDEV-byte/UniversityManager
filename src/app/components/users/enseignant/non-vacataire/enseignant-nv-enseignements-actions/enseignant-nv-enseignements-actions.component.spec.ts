/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnseignantNvEnseignementsActionsComponent } from './enseignant-nv-enseignements-actions.component';

describe('EnseignantNvEnseignementsActionsComponent', () => {
  let component: EnseignantNvEnseignementsActionsComponent;
  let fixture: ComponentFixture<EnseignantNvEnseignementsActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantNvEnseignementsActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantNvEnseignementsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
