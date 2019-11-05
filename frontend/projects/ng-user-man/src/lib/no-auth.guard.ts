import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NgUserManService } from './ng-user-man.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private ngUsermanService: NgUserManService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // access permitted for all roles included 'null'
    // access denied from next.data.auth
    const restrictedRoleForAuthorization = next.data.auth; // from routing.module
    const user = this.ngUsermanService.userCookieExtractor();

    if (!user) {
      return true;
    } else {
      return !(restrictedRoleForAuthorization.indexOf(user.role) >= 0);
    }
  }
}
