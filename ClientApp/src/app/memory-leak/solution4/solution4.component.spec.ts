import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution4Component } from './solution4.component';

describe('Solution4Component', () => {
  let component: Solution4Component;
  let fixture: ComponentFixture<Solution4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solution4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
