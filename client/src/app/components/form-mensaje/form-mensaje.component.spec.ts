import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMensajeComponent } from './form-mensaje.component';

describe('FormMensajeComponent', () => {
  let component: FormMensajeComponent;
  let fixture: ComponentFixture<FormMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
