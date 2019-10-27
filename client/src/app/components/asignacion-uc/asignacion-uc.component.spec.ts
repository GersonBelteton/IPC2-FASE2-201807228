import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionUcComponent } from './asignacion-uc.component';

describe('AsignacionUcComponent', () => {
  let component: AsignacionUcComponent;
  let fixture: ComponentFixture<AsignacionUcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionUcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionUcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
