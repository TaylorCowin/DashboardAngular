import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAdminDashComponent } from './section-admin-dash.component';

describe('SectionAdminDashComponent', () => {
  let component: SectionAdminDashComponent;
  let fixture: ComponentFixture<SectionAdminDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAdminDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAdminDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
