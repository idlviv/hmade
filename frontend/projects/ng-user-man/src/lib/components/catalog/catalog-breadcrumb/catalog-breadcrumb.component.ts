import { Component, OnInit, Injector, Input } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { ICatalog } from '../../../interfaces';

@Component({
  selector: 'lib-catalog-breadcrumb',
  templateUrl: './catalog-breadcrumb.component.html',
  styleUrls: ['./catalog-breadcrumb.component.scss']
})
export class CatalogBreadcrumbComponent implements OnInit {
  protected parent: string;
  processing = true;
  parentCategories: ICatalog[];
  protected topLevel: string;
  protected catalogService: CatalogService;
  public route: ActivatedRoute;
  public router: Router;
  public config: any;

  constructor(
    protected injector: Injector,
  ) {
    this.config = injector.get('config');
    this.catalogService = injector.get(CatalogService);
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
  }

  ngOnInit() {
    const $paramMap = this.route.paramMap;
    const $queryParamMap = this.route.queryParamMap;
    $paramMap.pipe(
      mergeMap(paramMap => {
        this.processing = true;
        this.parent = paramMap.get('parent');
        if (!this.parent) {
          return this.catalogService.getAllParentsInclCurrentCategory(this.topLevel, this.topLevel);
        }
        return this.catalogService.getAllParentsInclCurrentCategory(this.parent, this.topLevel);
      })
    )
      .subscribe((result: ICatalog[]) => {
        this.parentCategories = result;
        this.parentCategories.shift(); // delete unneeded root categorie
        this.processing = false;
      },
        err => console.log('Помилка breadcrumb', err)
      );
  }

  navigateToTopLevel() {
    this.router.navigate(['/' + this.topLevel, 'ch']);
  }

  navigateToParent(id: string, queryParams: { seoTitle: string, seoMeta: string }) {
    this.router.navigate(['/' + this.topLevel, 'ch',
    { outlets: { primary: [id], breadcrumb: [id] } }],
      { queryParams },
    );
  }
}
