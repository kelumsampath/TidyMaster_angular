import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcuspromotedjobComponent } from './viewcuspromotedjob.component';

describe('ViewcuspromotedjobComponent', () => {
  let component: ViewcuspromotedjobComponent;
  let fixture: ComponentFixture<ViewcuspromotedjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcuspromotedjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcuspromotedjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
