import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiWithTokenComponent } from './regi-with-token.component';

describe('RegiWithTokenComponent', () => {
  let component: RegiWithTokenComponent;
  let fixture: ComponentFixture<RegiWithTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiWithTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiWithTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
