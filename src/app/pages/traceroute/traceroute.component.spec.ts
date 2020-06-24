import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracerouteComponent } from './traceroute.component';

describe('TracerouteComponent', () => {
  let component: TracerouteComponent;
  let fixture: ComponentFixture<TracerouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracerouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
