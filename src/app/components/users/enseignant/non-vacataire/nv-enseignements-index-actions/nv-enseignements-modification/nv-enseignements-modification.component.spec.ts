import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvEnseignementsModificationComponent } from './nv-enseignements-modification.component';

describe('NvEnseignementsModificationComponent', () => {
  let component: NvEnseignementsModificationComponent;
  let fixture: ComponentFixture<NvEnseignementsModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvEnseignementsModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvEnseignementsModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
