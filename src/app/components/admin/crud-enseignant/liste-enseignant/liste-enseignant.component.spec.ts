import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEnseignantComponent } from './liste-enseignant.component';

describe('ListeEnseignantComponent', () => {
  let component: ListeEnseignantComponent;
  let fixture: ComponentFixture<ListeEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
