import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';
import { Title, Meta } from '@angular/platform-browser';
import { config } from './app.config';

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

    this.userService.logging();

    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .map(() => this.route)
    .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
    })
    .filter(route => route.outlet === 'primary')
    // Data fields are merged so we can use them directly to take title and metaDescription for each route from them
    .mergeMap(route => route.queryParamMap)
    // Real action starts there
    .subscribe((paramMap) => {
        const seoTitle = paramMap.get('seoTitle') || config.seoTitle;
        const seoMeta = paramMap.get('seoMeta') || config.seoMeta;
        console.log('title', seoTitle);
        console.log('metaDescription', seoMeta);
        // Changing title
        this.titleService.setTitle(seoTitle);

        // Changing meta with name="description"
        const tag = { name: 'description', content: seoMeta };
        const attributeSelector = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag, false);
    });
  }

}
