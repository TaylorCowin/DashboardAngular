import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCasesComponent } from './section-cases.component';

describe('SectionCasesComponent', () => {
  let component: SectionCasesComponent;
  let fixture: ComponentFixture<SectionCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
