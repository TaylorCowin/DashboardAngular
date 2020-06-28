import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPrefsComponent } from './section-prefs.component';

describe('SectionPrefsComponent', () => {
  let component: SectionPrefsComponent;
  let fixture: ComponentFixture<SectionPrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPrefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
