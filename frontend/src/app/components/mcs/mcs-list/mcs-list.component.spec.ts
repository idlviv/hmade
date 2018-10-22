import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McsListComponent } from './mcs-list.component';

describe('McsListComponent', () => {
  let component: McsListComponent;
  let fixture: ComponentFixture<McsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
