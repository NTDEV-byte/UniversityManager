/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NvInscriptionEnseignementDetailComponent } from './nv-inscription-detail.component';

describe('NvInscriptionEnseignementDetailComponent', () => {
  let component: NvInscriptionEnseignementDetailComponent;
  let fixture: ComponentFixture<NvInscriptionEnseignementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvInscriptionEnseignementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvInscriptionEnseignementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
