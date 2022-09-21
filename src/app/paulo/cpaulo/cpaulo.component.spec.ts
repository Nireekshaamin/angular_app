import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpauloComponent } from './cpaulo.component';

describe('CpauloComponent', () => {
  let component: CpauloComponent;
  let fixture: ComponentFixture<CpauloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpauloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpauloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
