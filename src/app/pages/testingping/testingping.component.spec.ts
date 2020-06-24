import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingpingComponent } from './testingping.component';

describe('TestingpingComponent', () => {
  let component: TestingpingComponent;
  let fixture: ComponentFixture<TestingpingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingpingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
