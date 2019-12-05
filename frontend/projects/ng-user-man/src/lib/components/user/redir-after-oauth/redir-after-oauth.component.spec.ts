import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirAfterOauthComponent } from './redir-after-oauth.component';

describe('RedirectionAfterOauthComponent', () => {
  let component: RedirAfterOauthComponent;
  let fixture: ComponentFixture<RedirAfterOauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RedirAfterOauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirAfterOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
