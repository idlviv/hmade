import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemFeedComponent } from './product-item-feed.component';

describe('ProductItemFeedComponent', () => {
  let component: ProductItemFeedComponent;
  let fixture: ComponentFixture<ProductItemFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
