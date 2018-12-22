import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptjobpostComponent } from './acceptjobpost.component';

describe('AcceptjobpostComponent', () => {
  let component: AcceptjobpostComponent;
  let fixture: ComponentFixture<AcceptjobpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptjobpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptjobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
