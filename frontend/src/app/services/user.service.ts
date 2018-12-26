import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUser } from '../interfaces/user-interface';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable ,  ReplaySubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { config } from '../app.config';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserService {
  user: IUser;
  private _logging: ReplaySubject<IUser> = new ReplaySubject(1);

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Create new user
   *
   * @param {IUser} user
   * @param {string} recaptcha
   * @returns {Observable<string>}
   * @memberof UserService
   */
  userCreate(user: IUser, recaptcha: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
          recaptcha
        }})
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
   * @param {IUser} user
   * @returns {Observable<IUser>}
   * @memberof UserService
   */
  userLogin(user: IUser): Observable<IUser> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        login: user.login,
        password: user.password
      }})
    };
    return this.http.get<IUser>(
      'api/user/Login',
      httpOptions
    );
  }

  /**
   * Login with google social sin in
   *
   * @returns {Observable<any>}
   * @memberof UserService
   */
  userGoogleLogin(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
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
   * @returns {Observable<IResponse>}
   * @memberof UserService
   */
  userGetProfile(): Observable<IUser> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
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
   * @returns {Observable<String>}
   * @memberof UserService
   */
  userLogout(): Observable<String> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<String>(
      'api/user/logout',
      httpOptions
    );
  }

  /** Session
   * Used for router guard (canActivate)
   *
   * @param {string} requiredRoleForAuthentication
   * @returns {Observable<boolean>}
   * @memberof UserService
   */
  userCheckAuthorization(requiredRoleForAuthentication: string): Observable<boolean> {
    const token = this.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({fromString: `role=${requiredRoleForAuthentication}`})

    };
    return this.http.get<boolean>(
      'api/user/checkAuthorization',
      httpOptions
    );
  }

  /**
   * Helper for frontend authorization
   * Check user permittion for some restricted actions
   * like menu displaying..
   *
   * @param {string} permitedRole
   * @returns {boolean}
   * @memberof UserService
   */
  allowTo(permitedRole: string): boolean {
    const permissions = config.permissions;
    const user = this.userLocalGetCredentials('token');
    if (!user) {
      return false;
    }
    const roleFromLocalStorage = user.role;
    if (permissions[roleFromLocalStorage].indexOf(permitedRole) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Helper for checking image file before uploading
   *
   * @param {*} eventTarget
   * @returns {IResponse}
   * @memberof UserService
   */
  checkFile(eventTarget: any): IResponse {
    if (!eventTarget.files[0]) {
      return ({success: false, message: 'Виберіть файл'});
    } else if (eventTarget.files[0].size > 8400000) {
      return ({success: false, message: 'Розмір файлу повинен бути менше 8Мб'});
    } else if (
      eventTarget.files[0].type !== 'image/jpg' &&
      eventTarget.files[0].type !== 'image/jpe' &&
      eventTarget.files[0].type !== 'image/jpeg' &&
      eventTarget.files[0].type !== 'image/bmp' &&
      eventTarget.files[0].type !== 'image/png' &&
      eventTarget.files[0].type !== 'image/webp') {
      return ({success: false, message: 'Виберіть інший тип файлу'});
    } else {
      return ({success: true,  message: ''});
    }
  }

  /**
   * First step to reset password
   * Send reset code on email and write its hash in db
   *
   * @param {string} email
   * @param {string} recaptcha
   * @returns {Observable<string>}
   * @memberof UserService
   */
  userPasswordResetEmail(email: string, recaptcha: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        email, recaptcha
      }})
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
   * @param {string} code
   * @param {string} codeToken
   * @returns {Observable<string>}
   * @memberof UserService
   */
  userPasswordResetCode(code: string, codeToken: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': codeToken
      }),
      params: new HttpParams({ fromObject: {
        code,
      }})
    };
    return this.http.get<string>(
      'api/user/password-reset-check-code',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {string} password
   * @param {string} passwordResetToken
   * @returns {Observable<string>}
   * @memberof UserService
   */
  userPasswordReset(password: string, passwordResetToken: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': passwordResetToken
      }),
      params: new HttpParams({ fromObject: {
        password,
      }})
    };
    return this.http.get<string>(
      'api/user/password-reset',
      httpOptions
    );
  }

  userEmailVerification(): Observable<IResponse> {
    const token = this.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.http.get<IResponse>(
      'api/user/email-verification-send',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {{name: string, value: string, password: string}} data
   * @returns {Observable<string>}
   * @memberof UserService
   */
  userEdit(data: {name: string, value: string, password: string}): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
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
   * @param {*} file
   * @returns {Observable<string>}
   * @memberof UserService
   */
  userEditAvatar(file): Observable<string> {
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



  // create Observable for user login watch
  userLocalLogin(token) {
    if (token) {
      this.userLocalSetToken('token', token);
    }
    const user = this.userLocalGetCredentials('token');
    this._logging.next(user);
  }

  userLocalLogout() {
    this.userLocalRemoveToken('token');
    const user = null;
    this._logging.next(user);
  }

  getUserLocal(): Observable <IUser> {
    return this._logging.asObservable();
  }
  // end of observable



   /**
   * Token manipulations
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
    if (helper.isTokenExpired(token)) {
      this.userLocalRemoveToken(tokenKey);
    }
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

  userLocalGetCredentials(tokenKey) {
    const token = this.userLocalGetToken(tokenKey);
    if (!token) {
      return null;
    }
    const helper = new JwtHelperService();
    return helper.decodeToken(token).sub;
  }

  userLocalGetExpirationDate(tokenKey): Date {
    const token = localStorage.getItem(tokenKey);
    const helper = new JwtHelperService();
    return helper.getTokenExpirationDate(token);
  }
}
