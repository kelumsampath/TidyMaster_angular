import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrunningjobsComponent } from './customerrunningjobs.component';

describe('CustomerrunningjobsComponent', () => {
  let component: CustomerrunningjobsComponent;
  let fixture: ComponentFixture<CustomerrunningjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerrunningjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrunningjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
