import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnslookupComponent } from './dnslookup.component';

describe('DnslookupComponent', () => {
  let component: DnslookupComponent;
  let fixture: ComponentFixture<DnslookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnslookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnslookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
