import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewactivejobComponent } from './viewactivejob.component';

describe('ViewactivejobComponent', () => {
  let component: ViewactivejobComponent;
  let fixture: ComponentFixture<ViewactivejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewactivejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewactivejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
