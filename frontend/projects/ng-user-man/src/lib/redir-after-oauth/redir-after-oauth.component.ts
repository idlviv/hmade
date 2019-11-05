import { Component, OnInit, Injector } from '@angular/core';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { NgUserManService } from '../ng-user-man.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'lib-redir-after-oauth',
  templateUrl: './redir-after-oauth.component.html',
  styleUrls: ['./redir-after-oauth.component.scss']
})
export class RedirAfterOauthComponent implements OnInit {
  protected ngUserManService: NgUserManService;
  protected router: Router;

  constructor(
    protected injector: Injector,
  ) {
    this.ngUserManService = injector.get(NgUserManService);
    this.router = injector.get(Router);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof RouteConfigLoadEnd),
      take(1)
    )
      .subscribe(
        (event) => {
          // this.ngUserManService.logging();
          this.router.navigate(['/user', 'profile']);
        },
        (err) => console.log('err', err)
      );
  }

}
