import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfeaturedComponent } from './cfeatured.component';

describe('CfeaturedComponent', () => {
  let component: CfeaturedComponent;
  let fixture: ComponentFixture<CfeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
