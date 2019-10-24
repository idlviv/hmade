import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUserManComponent } from './ng-user-man.component';

describe('NgUserManComponent', () => {
  let component: NgUserManComponent;
  let fixture: ComponentFixture<NgUserManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUserManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUserManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
