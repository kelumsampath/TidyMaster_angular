import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerSideComponent } from './cleaner-side.component';

describe('CleanerSideComponent', () => {
  let component: CleanerSideComponent;
  let fixture: ComponentFixture<CleanerSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
