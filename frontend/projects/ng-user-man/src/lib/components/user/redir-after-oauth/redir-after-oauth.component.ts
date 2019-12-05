import { Component, OnInit, Injector } from '@angular/core';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { UserService } from '../user.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'lib-redir-after-oauth',
  templateUrl: './redir-after-oauth.component.html',
  styleUrls: ['./redir-after-oauth.component.scss']
})
export class RedirAfterOauthComponent implements OnInit {
  protected userService: UserService;
  protected router: Router;

  constructor(
    protected injector: Injector,
  ) {
    this.userService = injector.get(UserService);
    this.router = injector.get(Router);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof RouteConfigLoadEnd),
      take(1)
    )
      .subscribe(
        (event) => {
          // this.userService.logging();
          this.router.navigate(['/user', 'profile']);
        },
        (err) => console.log('err', err)
      );
  }

}
