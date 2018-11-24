import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedjobpostComponent } from './rejectedjobpost.component';

describe('RejectedjobpostComponent', () => {
  let component: RejectedjobpostComponent;
  let fixture: ComponentFixture<RejectedjobpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedjobpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedjobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
