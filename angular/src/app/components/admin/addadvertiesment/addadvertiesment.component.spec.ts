import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadvertiesmentComponent } from './addadvertiesment.component';

describe('AddadvertiesmentComponent', () => {
  let component: AddadvertiesmentComponent;
  let fixture: ComponentFixture<AddadvertiesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadvertiesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadvertiesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
