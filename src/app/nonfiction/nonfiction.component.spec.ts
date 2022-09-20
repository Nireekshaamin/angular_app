import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonfictionComponent } from './nonfiction.component';

describe('NonfictionComponent', () => {
  let component: NonfictionComponent;
  let fixture: ComponentFixture<NonfictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonfictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonfictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
