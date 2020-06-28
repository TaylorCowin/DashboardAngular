import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAdminDetailsComponent } from './section-admin-details.component';

describe('SectionAdminDetailsComponent', () => {
  let component: SectionAdminDetailsComponent;
  let fixture: ComponentFixture<SectionAdminDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAdminDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
