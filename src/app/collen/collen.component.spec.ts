import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollenComponent } from './collen.component';

describe('CollenComponent', () => {
  let component: CollenComponent;
  let fixture: ComponentFixture<CollenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
