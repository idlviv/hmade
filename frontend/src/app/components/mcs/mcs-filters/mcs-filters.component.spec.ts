import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McsFiltersComponent } from './mcs-filters.component';

describe('McsFiltersComponent', () => {
  let component: McsFiltersComponent;
  let fixture: ComponentFixture<McsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
