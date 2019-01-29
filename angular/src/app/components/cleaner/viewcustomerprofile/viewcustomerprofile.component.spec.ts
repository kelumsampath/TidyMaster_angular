import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerprofileComponent } from './viewcustomerprofile.component';

describe('ViewcustomerprofileComponent', () => {
  let component: ViewcustomerprofileComponent;
  let fixture: ComponentFixture<ViewcustomerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
