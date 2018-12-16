import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedcomplainsComponent } from './checkedcomplains.component';

describe('CheckedcomplainsComponent', () => {
  let component: CheckedcomplainsComponent;
  let fixture: ComponentFixture<CheckedcomplainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedcomplainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedcomplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
