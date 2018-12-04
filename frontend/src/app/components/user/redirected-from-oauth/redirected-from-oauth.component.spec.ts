import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectedFromOauthComponent } from './redirected-from-oauth.component';

describe('RedirectedFromOauthComponent', () => {
  let component: RedirectedFromOauthComponent;
  let fixture: ComponentFixture<RedirectedFromOauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectedFromOauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectedFromOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
