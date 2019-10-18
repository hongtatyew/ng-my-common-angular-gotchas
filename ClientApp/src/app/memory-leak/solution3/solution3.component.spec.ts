import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution3Component } from './solution3.component';

describe('Solution3Component', () => {
  let component: Solution3Component;
  let fixture: ComponentFixture<Solution3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solution3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
