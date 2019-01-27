import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSideComponent } from './customer-side.component';

describe('CustomerSideComponent', () => {
  let component: CustomerSideComponent;
  let fixture: ComponentFixture<CustomerSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
