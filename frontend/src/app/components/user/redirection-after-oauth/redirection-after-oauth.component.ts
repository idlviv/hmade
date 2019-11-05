import { Component, OnInit, Injector } from '@angular/core';
// import { Router, RouteConfigLoadEnd } from '@angular/router';
// import { NgUserManService } from 'ng-user-man';
// import { filter, take } from 'rxjs/operators';
import { RedirAfterOauthComponent } from 'ng-user-man';

@Component({
  selector: 'app-redirection-after-oauth',
  templateUrl: './redirection-after-oauth.component.html',
  styleUrls: ['./redirection-after-oauth.component.scss']
})
export class RedirectionAfterOauthComponent extends RedirAfterOauthComponent implements OnInit {

  constructor(
    protected injector: Injector,

    // private router: Router,
    // private userService: UserService,
  ) {
    super(injector);
   }

  ngOnInit() {
    super.ngOnInit();
    // this.router.events.pipe(
    //   filter((event) => event instanceof RouteConfigLoadEnd),
    //   take(1)
    // )
    //   .subscribe(
    //     (event) => {
    //       this.userService.logging();
    //       this.router.navigate(['/user', 'profile']);
    //     },
    //     (err) => console.log('err', err)
    //   );
  }

}
