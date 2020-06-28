import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAdminTableComponent } from './section-admin-table.component';

describe('SectionAdminTableComponent', () => {
  let component: SectionAdminTableComponent;
  let fixture: ComponentFixture<SectionAdminTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAdminTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
