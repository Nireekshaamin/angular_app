import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollenchildComponent } from './collenchild.component';

describe('CollenchildComponent', () => {
  let component: CollenchildComponent;
  let fixture: ComponentFixture<CollenchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollenchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollenchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
