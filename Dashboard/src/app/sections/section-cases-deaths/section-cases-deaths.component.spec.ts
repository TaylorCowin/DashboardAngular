import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCasesDeathsComponent } from './section-cases-deaths.component';

describe('SectionCasesDeathsComponent', () => {
  let component: SectionCasesDeathsComponent;
  let fixture: ComponentFixture<SectionCasesDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCasesDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCasesDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
