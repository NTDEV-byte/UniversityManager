import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionGroupeComponent } from './attribution-groupe.component';

describe('AttributionGroupeComponent', () => {
  let component: AttributionGroupeComponent;
  let fixture: ComponentFixture<AttributionGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributionGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributionGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
