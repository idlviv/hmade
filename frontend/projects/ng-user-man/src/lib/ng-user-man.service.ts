import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUser } from './interfaces';
import { Observable, ReplaySubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class NgUserManService {
  user: IUser;
  config: any;
  private _logging: ReplaySubject<IUser> = new ReplaySubject(1);
  tokenSyncronizatonProgress = false;

  private eventToReloadUser: ReplaySubject<IUser> = new ReplaySubject(1);
  eventToReloadUser$ = this.eventToReloadUser.asObservable();

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    public injector: Injector,
  ) {
    this.config = injector.get('config');
   }

 /*
  * Create new user
  *
  */
  userCreate(user: IUser, recaptcha: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          recaptcha
        }
      })
    };
    return this.http.post<string>(
      'api/user/create',
      user,
      httpOptions
    );
  }

  /**
   * Login with username and password
   *
   */

  userLogin(user: IUser): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          login: user.login,
          password: user.password
        }
      })
    };
    return this.http.get<string>(
      'api/user/login',
      httpOptions
    );
  }

  /**
   * Login with google social sin in
   *
   */
  userGoogleLogin(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(
      'api/user/auth/google',
      httpOptions
    );
  }

  /**
   * Get profile
   *
   */
  userGetProfile(): Observable<IUser> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IUser>(
      'api/user/profile',
      httpOptions
    );
  }

  /** Session
   * User logout
   *
   */
  userLogout(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<string>(
      'api/user/logout',
      httpOptions
    );
  }



  /** Session
   * Used for router guard (canActivate)
   *
   */
  userCheckAuthorization(requiredRoleForAuthentication: string): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({ fromString: `role=${requiredRoleForAuthentication}` })

    };
    return this.http.get<boolean>(
      'api/user/checkAuthorization',
      httpOptions
    );
  }

  /**
   * Extract user from cookie
   *
   */
  userCookieExtractor(): IUser | null {
    if (this.cookieService.get('hmade')) {
      const helper = new JwtHelperService();
      return helper.decodeToken(this.cookieService.get('hmade')).sub;
    }
    return null;
  }

  /**
   * Helper for frontend authorization
   * Check user permittion for some restricted actions
   * like menu displaying..
   *
   */
  allowTo(permitedRole: string): boolean {
    const user = this.userCookieExtractor();
    const permissions = this.config.permissions;
    if (!user && permitedRole === 'notUser') {
      return true;
    }
    if (!user) {
      return false;
    }
    const roleFromCookie = user.role;
    if (permissions[roleFromCookie].indexOf(permitedRole) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  restrictTo(restrictedRoles: string[]): boolean {
    const user = this.userCookieExtractor();
    if (!user) {
      return true;
    }
    const roleFromCookie = user.role;
    if (restrictedRoles.indexOf(roleFromCookie) >= 0) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Helper for checking image file before uploading
   *
   */
  checkFile(eventTarget: any): any {
    if (!eventTarget.files[0]) {
      return ({ success: false, message: 'Виберіть файл' });
    } else if (eventTarget.files[0].size > 8400000) {
      return ({ success: false, message: 'Розмір файлу повинен бути менше 8Мб' });
    } else if (
      eventTarget.files[0].type !== 'image/jpg' &&
      eventTarget.files[0].type !== 'image/jpe' &&
      eventTarget.files[0].type !== 'image/jpeg' &&
      eventTarget.files[0].type !== 'image/bmp' &&
      eventTarget.files[0].type !== 'image/png' &&
      eventTarget.files[0].type !== 'image/webp') {
      return ({ success: false, message: 'Виберіть інший тип файлу' });
    } else {
      return ({ success: true, message: '' });
    }
  }

  /**
   * First step to reset password
   * Send reset code on email and write its hash in db
   *
   */
  userPasswordResetEmail(email: string, recaptcha: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          email, recaptcha
        }
      })
    };
    return this.http.get<string>(
      'api/user/password-reset-check-email',
      httpOptions
    );
  }

  /**
   * Second step to reset password
   * Compare code from email with one in db
   *
   */
  userPasswordResetCode(code: string, codeToken: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: codeToken
      }),
      params: new HttpParams({
        fromObject: {
          code,
        }
      })
    };
    return this.http.get<string>(
      'api/user/password-reset-check-code',
      httpOptions
    );
  }

  /**
   *
   *
   */
  userPasswordReset(password: string, passwordResetToken: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: passwordResetToken
      }),
      params: new HttpParams({
        fromObject: {
          password,
        }
      })
    };
    return this.http.get<string>(
      'api/user/password-reset',
      httpOptions
    );
  }

  userEmailVerification(): Observable<string> {
    // const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': token
      })
    };
    return this.http.get<string>(
      'api/user/email-verification-send',
      httpOptions
    );
  }

  /**
   * Edit user fields without password confirmation
   *
   */
  userEditUnsecure(data: { name: string, value?: string }): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put<string>(
      'api/user/editUnsecure',
      data,
      httpOptions
    );
  }

  /** Edit user fields with password confirmation
   *
   *
   */
  userEdit(data: { name: string, value: string, password: string }): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put<string>(
      'api/user/edit',
      data,
      httpOptions
    );
  }

  /**
   *
   *
   */
  userEditAvatar(file: any): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
      })
    };
    return this.http.put<string>(
      'api/user/edit-avatar',
      formData,
      httpOptions
    );
  }

  logging() {
    const user = this.userCookieExtractor();
    this._logging.next(user);
  }

  userManualUpdateCookie(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<string>(
      'api/user/manual-update-cookie',
      httpOptions
    );
  }

  getUserLocal(): Observable<IUser | null> {
    // return this.userCookieExtractor();
    return this._logging.asObservable();
  }

  /*
   * Token manipulations
   *
   */

  userLocalSetToken(tokenKey, token): void {
    localStorage.setItem(tokenKey, token);
  }

  userLocalRemoveToken(tokenKey): void {
    localStorage.removeItem(tokenKey);
  }

  userLocalCheckExpiration(tokenKey): boolean {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      return true;
    }
    const helper = new JwtHelperService();
    return helper.isTokenExpired(token);
  }

  userLocalGetToken(tokenKey): string {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      return '';
    }
    if (this.userLocalCheckExpiration(tokenKey)) {
      return '';
    }
    return token;
  }

  userLocalGetExpirationDate(tokenKey): Date {
    const token = localStorage.getItem(tokenKey);
    const helper = new JwtHelperService();
    return helper.getTokenExpirationDate(token);
  }

}
