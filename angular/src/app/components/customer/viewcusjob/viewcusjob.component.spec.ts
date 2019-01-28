import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcusjobComponent } from './viewcusjob.component';

describe('ViewcusjobComponent', () => {
  let component: ViewcusjobComponent;
  let fixture: ComponentFixture<ViewcusjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcusjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcusjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
