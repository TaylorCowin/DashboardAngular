import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDeathsComponent } from './section-deaths.component';

describe('SectionDeathsComponent', () => {
  let component: SectionDeathsComponent;
  let fixture: ComponentFixture<SectionDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
