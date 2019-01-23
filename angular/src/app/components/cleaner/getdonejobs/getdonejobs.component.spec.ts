import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdonejobsComponent } from './getdonejobs.component';

describe('GetdonejobsComponent', () => {
  let component: GetdonejobsComponent;
  let fixture: ComponentFixture<GetdonejobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdonejobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdonejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
