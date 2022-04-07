import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementComponent } from './enseignement.component';

describe('EnseignementComponent', () => {
  let component: EnseignementComponent;
  let fixture: ComponentFixture<EnseignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
