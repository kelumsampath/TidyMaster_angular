import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewcomplainComponent } from './reviewcomplain.component';

describe('ReviewcomplainComponent', () => {
  let component: ReviewcomplainComponent;
  let fixture: ComponentFixture<ReviewcomplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewcomplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewcomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
