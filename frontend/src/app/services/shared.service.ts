import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IResponse } from '../interfaces/server-response-interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { IUser } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private _shareEvent: ReplaySubject<any> = new ReplaySubject(1);
  shareEvent$ = this._shareEvent.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  // sharing data between components
  sharingEvent(x) {
    this._shareEvent.next(x);
  }

  getSharingEvent() {
    return this.shareEvent$;
  }
  // ['updateDesigns'] design-item-component => design-editor-component
  // ['closeSidenav'] design-popup-component => app-component
  // ['userChangeStatusEmitter'] user login (login comp) or logout (content-component) or
  //     markCommentsAsReaded (content-component) emitter =>
  //     content-component (update unreaded comments length)

  // sending feedback message
  sendFeedbackMessage(feedback, recaptcha): Observable<IResponse> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        }),
        params: new HttpParams({ fromObject: {
            recaptcha
          }})
      };
    return this.http.post<IResponse>(
      'api/shared/send-feedback-message',
      feedback,
      httpOptions
    );
  }

  checkFile(file: File): IResponse {
    if (!file) {
      return ({ success: false, message: 'Файл не вибрано' });
    } else if (file.size > 26215000) { // 25 * 1024 * 1024
      return ({ success: false, message: 'Розмір файлу повинен бути менше 25Мб' });
    } else if (
      file.type !== 'image/jpg' &&
      file.type !== 'image/jpe' &&
      file.type !== 'image/gif' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/bmp' &&
      file.type !== 'image/png' &&
      file.type !== 'image/svg+xml' &&
      file.type !== 'image/webp') {
      return ({ success: false, message: 'Виберіть інший тип файлу' });
    } else {
      return ({ success: true, message: '' });
    }
  }
}


