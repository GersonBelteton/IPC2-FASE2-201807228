import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAuxiliarComponent } from './nav-auxiliar.component';

describe('NavAuxiliarComponent', () => {
  let component: NavAuxiliarComponent;
  let fixture: ComponentFixture<NavAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
