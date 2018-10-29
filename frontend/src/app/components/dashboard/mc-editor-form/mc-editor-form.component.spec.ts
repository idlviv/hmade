import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McEditorFormComponent } from './mc-editor-form.component';

describe('McEditorFormComponent', () => {
  let component: McEditorFormComponent;
  let fixture: ComponentFixture<McEditorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McEditorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
