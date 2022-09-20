import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csudha1Component } from './csudha1.component';

describe('Csudha1Component', () => {
  let component: Csudha1Component;
  let fixture: ComponentFixture<Csudha1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csudha1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Csudha1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
