import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadvertiserComponent } from './addadvertiser.component';

describe('AddadvertiserComponent', () => {
  let component: AddadvertiserComponent;
  let fixture: ComponentFixture<AddadvertiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadvertiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadvertiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
