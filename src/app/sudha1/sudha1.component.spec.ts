import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sudha1Component } from './sudha1.component';

describe('Sudha1Component', () => {
  let component: Sudha1Component;
  let fixture: ComponentFixture<Sudha1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sudha1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sudha1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
