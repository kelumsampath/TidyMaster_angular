import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsuperadminComponent } from './addsuperadmin.component';

describe('AddsuperadminComponent', () => {
  let component: AddsuperadminComponent;
  let fixture: ComponentFixture<AddsuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
