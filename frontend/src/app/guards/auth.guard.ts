import { of,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const requiredRoleForAuthentication = next.data.auth; // from routing.module
    return this.userService.userCheckAuthorization(requiredRoleForAuthentication).pipe(
      map(permission => permission),
      catchError(err => of(false))
      );

  }
}
