import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxsetsComponent } from './boxsets.component';

describe('BoxsetsComponent', () => {
  let component: BoxsetsComponent;
  let fixture: ComponentFixture<BoxsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxsetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
