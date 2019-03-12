import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McsItemBriefComponent } from './mcs-item-brief.component';

describe('McsItemBriefComponent', () => {
  let component: McsItemBriefComponent;
  let fixture: ComponentFixture<McsItemBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McsItemBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McsItemBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
