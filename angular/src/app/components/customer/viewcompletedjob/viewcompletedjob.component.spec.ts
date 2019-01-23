import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompletedjobComponent } from './viewcompletedjob.component';

describe('ViewcompletedjobComponent', () => {
  let component: ViewcompletedjobComponent;
  let fixture: ComponentFixture<ViewcompletedjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcompletedjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcompletedjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
