import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUserComponent } from './lib-user.component';

describe('LibUserComponent', () => {
  let component: LibUserComponent;
  let fixture: ComponentFixture<LibUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
