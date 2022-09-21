import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrobinComponent } from './crobin.component';

describe('CrobinComponent', () => {
  let component: CrobinComponent;
  let fixture: ComponentFixture<CrobinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrobinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrobinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
