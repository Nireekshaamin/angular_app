import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsudhaComponent } from './csudha.component';

describe('CsudhaComponent', () => {
  let component: CsudhaComponent;
  let fixture: ComponentFixture<CsudhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsudhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsudhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
