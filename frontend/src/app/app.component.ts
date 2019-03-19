// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

import { filter, map, mergeMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';
import { Title, Meta } from '@angular/platform-browser';
import { config } from './app.config';
import { forkJoin, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config = config;
  showHeader = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
   ) { }

  ngOnInit() {

    // login user
    this.userService.logging();

    // add seo (title and meta description)
    const $routerEvents = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'));

      combineLatest(
        $routerEvents.pipe(mergeMap((route) => route.queryParamMap)), // query params
        $routerEvents.pipe(mergeMap((route) => route.data)) // routing.module data
      )
      .subscribe((result) => {
        const paramMap = result[0];
        const data = result[1];

        // prioryty: 1. embeded to router 2. passed as queryParams 3.default values
        const seoTitle = data.dataTitle || paramMap.get('seoTitle') || config.seoTitle;
        const seoMeta = data.dataMeta || paramMap.get('seoMeta') || config.seoMeta;

        this.titleService.setTitle(seoTitle);
        const tag = { name: 'description', content: seoMeta };
        const attributeSelector = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag, false);
    });
  }
}
