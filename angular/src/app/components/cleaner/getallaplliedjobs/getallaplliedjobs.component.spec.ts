import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallaplliedjobsComponent } from './getallaplliedjobs.component';

describe('GetallaplliedjobsComponent', () => {
  let component: GetallaplliedjobsComponent;
  let fixture: ComponentFixture<GetallaplliedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallaplliedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallaplliedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
