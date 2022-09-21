import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmorganComponent } from './cmorgan.component';

describe('CmorganComponent', () => {
  let component: CmorganComponent;
  let fixture: ComponentFixture<CmorganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmorganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmorganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
