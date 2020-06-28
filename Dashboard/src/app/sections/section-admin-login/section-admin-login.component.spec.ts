import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAdminLoginComponent } from './section-admin-login.component';

describe('SectionAdminLoginComponent', () => {
  let component: SectionAdminLoginComponent;
  let fixture: ComponentFixture<SectionAdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAdminLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
