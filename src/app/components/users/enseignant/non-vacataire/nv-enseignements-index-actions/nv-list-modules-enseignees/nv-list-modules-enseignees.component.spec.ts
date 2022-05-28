/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NvListModulesEnseigneesComponent } from './nv-list-modules-enseignees.component';

describe('NvListModulesEnseigneesComponent', () => {
  let component: NvListModulesEnseigneesComponent;
  let fixture: ComponentFixture<NvListModulesEnseigneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvListModulesEnseigneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvListModulesEnseigneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
