import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEstudianteComponent } from './ticket-estudiante.component';

describe('TicketEstudianteComponent', () => {
  let component: TicketEstudianteComponent;
  let fixture: ComponentFixture<TicketEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
