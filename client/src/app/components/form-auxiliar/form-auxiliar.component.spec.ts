import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuxiliarComponent } from './form-auxiliar.component';

describe('FormAuxiliarComponent', () => {
  let component: FormAuxiliarComponent;
  let fixture: ComponentFixture<FormAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
