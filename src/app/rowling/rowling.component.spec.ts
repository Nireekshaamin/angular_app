import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowlingComponent } from './rowling.component';

describe('RowlingComponent', () => {
  let component: RowlingComponent;
  let fixture: ComponentFixture<RowlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
