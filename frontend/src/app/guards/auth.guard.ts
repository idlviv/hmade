import { of,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const requiredRoleForAuthorization = next.data.auth; // from routing.module
    return this.userService.userCheckAuthorization(requiredRoleForAuthorization)
      .pipe(
        map((result) => {

          // set token for local login every time when check canActivate for router
          if (result.token) {
            this.userService.userLocalLogin(result.token);
          } else {
            this.userService.userLocalRemoveToken('token');
          }
          return result.permission;
        }),
        catchError(err => of(false))
      );

  }
}
