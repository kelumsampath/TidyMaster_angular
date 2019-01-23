import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostadvertismentComponent } from './postadvertisment.component';

describe('PostadvertismentComponent', () => {
  let component: PostadvertismentComponent;
  let fixture: ComponentFixture<PostadvertismentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostadvertismentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostadvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
