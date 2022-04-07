import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurComponent } from './administrateur.component';

describe('AdministrateurComponent', () => {
  let component: AdministrateurComponent;
  let fixture: ComponentFixture<AdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
