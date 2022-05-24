import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDesinscriptionDetailComponent } from './inscription-desinscription-detail.component';

describe('InscriptionDesinscriptionDetailComponent', () => {
  let component: InscriptionDesinscriptionDetailComponent;
  let fixture: ComponentFixture<InscriptionDesinscriptionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionDesinscriptionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionDesinscriptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
