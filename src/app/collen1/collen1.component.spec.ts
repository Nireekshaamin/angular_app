import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collen1Component } from './collen1.component';

describe('Collen1Component', () => {
  let component: Collen1Component;
  let fixture: ComponentFixture<Collen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Collen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Collen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
