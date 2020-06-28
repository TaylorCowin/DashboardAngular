import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCasesDetailsComponent } from './section-cases-details.component';

describe('SectionCasesDetailsComponent', () => {
  let component: SectionCasesDetailsComponent;
  let fixture: ComponentFixture<SectionCasesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCasesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
