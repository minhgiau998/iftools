import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelinkComponent } from './pagelink.component';

describe('PagelinkComponent', () => {
  let component: PagelinkComponent;
  let fixture: ComponentFixture<PagelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
