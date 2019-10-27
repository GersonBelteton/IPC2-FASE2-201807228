import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesEstudianteComponent } from './mensajes-estudiante.component';

describe('MensajesEstudianteComponent', () => {
  let component: MensajesEstudianteComponent;
  let fixture: ComponentFixture<MensajesEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
