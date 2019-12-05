import { Component, OnInit, HostListener, Injector } from '@angular/core';
import { IProduct, ICatalog } from '../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../../db.service';
import { CatalogService } from '../catalog.service';
import { MediaObserver } from '@angular/flex-layout';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'lib-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss']
})
export class CatalogMainComponent implements OnInit {
  items = [] as IProduct[] | any;
  // category_id: string;
  children: ICatalog[];
  category: any;
  processing = false;
  totalItemsLength = 0;
  portionOfItems: number;
  skip: number;

  protected collection: string;
  protected topLevel: string;
  public parent: string;

  private route: ActivatedRoute;
  private dbService: DbService;
  private catalogService: CatalogService;
  public media: MediaObserver;

  constructor(protected injector: Injector) {
    this.route = injector.get(ActivatedRoute);
    this.dbService = injector.get(DbService);
    this.catalogService = injector.get(CatalogService);
    this.media = injector.get(MediaObserver);
  }

  ngOnInit() {
    this.initialSetOfItems();
  }

  initialSetOfItems() {
    if (this.media.isActive('xs')) {
      this.portionOfItems = 3;
      this.refreshItems(-1, this.items.length, this.portionOfItems);
    } else if (this.media.isActive('sm')) {
      this.portionOfItems = 6;
      this.refreshItems(-1, this.items.length, this.portionOfItems);
    } else if (this.media.isActive('md')) {
      this.portionOfItems = 6;
      this.refreshItems(-1, this.items.length, this.portionOfItems);
    } else if (this.media.isActive('gt-md')) {
      this.portionOfItems = 8;
      this.refreshItems(-1, this.items.length, this.portionOfItems);
    }
  }

  // Listening of page bottom reached
  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 300) {
      if (
        !this.processing &&
        this.totalItemsLength > this.items.length &&
        this.totalItemsLength
      ) {
        this.refreshItems(-1, this.items.length, this.portionOfItems);
      }
    }
  }

  refreshItems(sort: number, skip: number, limit: number) {
    this.processing = true;
    // const $queryParamMap = this.route.queryParamMap;
    // const $paramMap = this.route.paramMap;
    this.route.paramMap.pipe(
      mergeMap(param => {
        this.parent = param.get('parent');
        if (!this.parent) {
          // starting from root
          return of(null);
        }
        // starting from selected category
        return this.catalogService.getCategoryById(this.parent);
      }),
      mergeMap((category: ICatalog | null) => {
        if (!category) {
          // get children of root
          return this.catalogService.getChildren(this.topLevel);
        } else {
          this.category = category;
          // get children of selected category
          return this.catalogService.getChildren(this.parent);
        }
      }),
      mergeMap((children: ICatalog[]) => {
        this.children = children;
        if (!this.children.length) {
          // if no children - show items
          this.skip = skip;
          return this.dbService.itemsByParent(this.collection, this.parent, true, sort, skip, limit);
        } else {
          this.items = [];
          return this.dbService.itemsByParent(this.collection, null, true, sort, skip, limit);
        }
      }))
      .subscribe(result => {
        this.totalItemsLength = result[0].total ? result[0].total.totalItemsLength : 0;
        this.items.push(...result[0].items);
        this.processing = false;
      },
        (err: HttpErrorResponse) => console.log (err.error.message)
      );
  }

}
