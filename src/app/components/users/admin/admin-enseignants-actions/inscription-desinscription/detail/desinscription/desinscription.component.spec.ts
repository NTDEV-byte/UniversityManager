import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesinscriptionComponent } from './desinscription.component';

describe('DesinscriptionComponent', () => {
  let component: DesinscriptionComponent;
  let fixture: ComponentFixture<DesinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesinscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
