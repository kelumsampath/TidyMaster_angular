import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsingleadvertiesmentComponent } from './viewsingleadvertiesment.component';

describe('ViewsingleadvertiesmentComponent', () => {
  let component: ViewsingleadvertiesmentComponent;
  let fixture: ComponentFixture<ViewsingleadvertiesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsingleadvertiesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsingleadvertiesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
