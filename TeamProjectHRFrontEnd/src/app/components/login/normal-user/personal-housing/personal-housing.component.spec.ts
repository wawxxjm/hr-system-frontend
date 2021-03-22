import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalHousingComponent } from './personal-housing.component';

describe('PersonalHousingComponent', () => {
  let component: PersonalHousingComponent;
  let fixture: ComponentFixture<PersonalHousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalHousingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
