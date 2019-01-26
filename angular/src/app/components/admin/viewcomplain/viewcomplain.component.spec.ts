import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomplainComponent } from './viewcomplain.component';

describe('ViewcomplainComponent', () => {
  let component: ViewcomplainComponent;
  let fixture: ComponentFixture<ViewcomplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcomplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
