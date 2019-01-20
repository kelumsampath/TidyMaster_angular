import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadvertismentComponent } from './viewadvertisment.component';

describe('ViewadvertismentComponent', () => {
  let component: ViewadvertismentComponent;
  let fixture: ComponentFixture<ViewadvertismentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewadvertismentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
