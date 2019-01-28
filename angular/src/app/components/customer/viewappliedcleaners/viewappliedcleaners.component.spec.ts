import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappliedcleanersComponent } from './viewappliedcleaners.component';

describe('ViewappliedcleanersComponent', () => {
  let component: ViewappliedcleanersComponent;
  let fixture: ComponentFixture<ViewappliedcleanersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewappliedcleanersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappliedcleanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
