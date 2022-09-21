import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowlingComponent } from './crowling.component';

describe('CrowlingComponent', () => {
  let component: CrowlingComponent;
  let fixture: ComponentFixture<CrowlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
