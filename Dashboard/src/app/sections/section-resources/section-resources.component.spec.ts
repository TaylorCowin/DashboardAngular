import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionResourcesComponent } from './section-resources.component';

describe('SectionResourcesComponent', () => {
  let component: SectionResourcesComponent;
  let fixture: ComponentFixture<SectionResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
