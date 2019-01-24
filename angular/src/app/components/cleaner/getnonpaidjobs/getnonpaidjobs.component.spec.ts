import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnonpaidjobsComponent } from './getnonpaidjobs.component';

describe('GetnonpaidjobsComponent', () => {
  let component: GetnonpaidjobsComponent;
  let fixture: ComponentFixture<GetnonpaidjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetnonpaidjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetnonpaidjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
