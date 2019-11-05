import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgUserManService } from './ng-user-man.service';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private ngUsermanService: NgUserManService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const requiredRoleForAuthorization = next.data.auth; // from routing.module
    return this.ngUsermanService.userCheckAuthorization(requiredRoleForAuthorization)
      .pipe(
        map((permission) => permission),
        catchError(err => of(false))
      );
  }
}
