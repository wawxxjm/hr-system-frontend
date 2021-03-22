import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisaStatusComponent } from './all-visa-status.component';

describe('AllVisaStatusComponent', () => {
  let component: AllVisaStatusComponent;
  let fixture: ComponentFixture<AllVisaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVisaStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVisaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
