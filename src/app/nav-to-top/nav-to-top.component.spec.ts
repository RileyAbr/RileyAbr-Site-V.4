import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToTopComponent } from './nav-to-top.component';

describe('NavToTopComponent', () => {
  let component: NavToTopComponent;
  let fixture: ComponentFixture<NavToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
