import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaAuxComponent } from './cuenta-aux.component';

describe('CuentaAuxComponent', () => {
  let component: CuentaAuxComponent;
  let fixture: ComponentFixture<CuentaAuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaAuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
