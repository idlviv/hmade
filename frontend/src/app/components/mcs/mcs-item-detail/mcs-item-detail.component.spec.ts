import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McsItemDetailComponent } from './mcs-item-detail.component';

describe('McsItemDetailComponent', () => {
  let component: McsItemDetailComponent;
  let fixture: ComponentFixture<McsItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McsItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McsItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
