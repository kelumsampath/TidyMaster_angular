import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpaidjobsComponent } from './getpaidjobs.component';

describe('GetpaidjobsComponent', () => {
  let component: GetpaidjobsComponent;
  let fixture: ComponentFixture<GetpaidjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpaidjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpaidjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
