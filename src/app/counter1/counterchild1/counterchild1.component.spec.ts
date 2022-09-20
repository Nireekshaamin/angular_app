import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counterchild1Component } from './counterchild1.component';

describe('Counterchild1Component', () => {
  let component: Counterchild1Component;
  let fixture: ComponentFixture<Counterchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Counterchild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Counterchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
