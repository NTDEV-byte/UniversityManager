import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRecapitulatifComponent } from './service-recapitulatif.component';

describe('ServiceRecapitulatifComponent', () => {
  let component: ServiceRecapitulatifComponent;
  let fixture: ComponentFixture<ServiceRecapitulatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRecapitulatifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRecapitulatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
