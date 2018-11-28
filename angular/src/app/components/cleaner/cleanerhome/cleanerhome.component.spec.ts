import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerhomeComponent } from './cleanerhome.component';

describe('CleanerhomeComponent', () => {
  let component: CleanerhomeComponent;
  let fixture: ComponentFixture<CleanerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
