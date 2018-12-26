import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionWithTokenComponent } from './redirection-with-token.component';

describe('RedirectionWithTokenComponent', () => {
  let component: RedirectionWithTokenComponent;
  let fixture: ComponentFixture<RedirectionWithTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectionWithTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectionWithTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
