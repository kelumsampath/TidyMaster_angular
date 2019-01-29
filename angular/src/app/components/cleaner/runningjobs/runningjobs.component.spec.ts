import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningjobsComponent } from './runningjobs.component';

describe('RunningjobsComponent', () => {
  let component: RunningjobsComponent;
  let fixture: ComponentFixture<RunningjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
