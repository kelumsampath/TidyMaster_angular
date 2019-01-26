import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomplainactionComponent } from './viewcomplainaction.component';

describe('ViewcomplainactionComponent', () => {
  let component: ViewcomplainactionComponent;
  let fixture: ComponentFixture<ViewcomplainactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcomplainactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcomplainactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
