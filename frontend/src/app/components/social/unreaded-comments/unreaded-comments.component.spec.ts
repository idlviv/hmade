import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadedCommentsComponent } from './unreaded-comments.component';

describe('UnreadedCommentsComponent', () => {
  let component: UnreadedCommentsComponent;
  let fixture: ComponentFixture<UnreadedCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreadedCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadedCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
