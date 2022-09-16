import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhaComponent } from './sudha.component';

describe('SudhaComponent', () => {
  let component: SudhaComponent;
  let fixture: ComponentFixture<SudhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
