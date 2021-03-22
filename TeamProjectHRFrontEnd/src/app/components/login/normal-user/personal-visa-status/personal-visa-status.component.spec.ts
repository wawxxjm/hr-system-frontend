import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalVisaStatusComponent } from './personal-visa-status.component';

describe('PersonalVisaStatusComponent', () => {
  let component: PersonalVisaStatusComponent;
  let fixture: ComponentFixture<PersonalVisaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalVisaStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalVisaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
