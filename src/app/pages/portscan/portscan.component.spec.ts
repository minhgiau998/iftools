import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortscanComponent } from './portscan.component';

describe('PortscanComponent', () => {
  let component: PortscanComponent;
  let fixture: ComponentFixture<PortscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
