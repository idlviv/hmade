import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart, RouteConfigLoadEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { filter, map, mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-redirection-after-oauth',
  templateUrl: './redirection-after-oauth.component.html',
  styleUrls: ['./redirection-after-oauth.component.scss']
})
export class RedirectionAfterOauthComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof RouteConfigLoadEnd),
      take(1)
    )
      .subscribe(
        (event) => {
          this.userService.logging();
          this.router.navigate(['/user', 'profile']);
        },
        (err) => console.log('err', err)
      );
  }

}
