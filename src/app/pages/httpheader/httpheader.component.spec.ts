import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpheaderComponent } from './httpheader.component';

describe('HttpheaderComponent', () => {
  let component: HttpheaderComponent;
  let fixture: ComponentFixture<HttpheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
