import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserprofileComponent } from './advertiserprofile.component';

describe('AdvertiserprofileComponent', () => {
  let component: AdvertiserprofileComponent;
  let fixture: ComponentFixture<AdvertiserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
