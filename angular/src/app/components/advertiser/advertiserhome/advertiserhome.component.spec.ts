import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserhomeComponent } from './advertiserhome.component';

describe('AdvertiserhomeComponent', () => {
  let component: AdvertiserhomeComponent;
  let fixture: ComponentFixture<AdvertiserhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
