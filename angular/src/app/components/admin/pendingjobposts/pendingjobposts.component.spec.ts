import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingjobpostsComponent } from './pendingjobposts.component';

describe('PendingjobpostsComponent', () => {
  let component: PendingjobpostsComponent;
  let fixture: ComponentFixture<PendingjobpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingjobpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingjobpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
