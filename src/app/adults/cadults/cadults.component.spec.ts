import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadultsComponent } from './cadults.component';

describe('CadultsComponent', () => {
  let component: CadultsComponent;
  let fixture: ComponentFixture<CadultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
