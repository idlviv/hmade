import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private shareEvent: ReplaySubject<any> = new ReplaySubject(1);
  shareEvent$ = this.shareEvent.asObservable();

  private eventToReloadComments: Subject<any> = new Subject();
  eventToReloadComments$ = this.eventToReloadComments.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  // sharing data between components
  sharingEvent(x: any) {
    this.shareEvent.next(x);
  }

  getSharingEvent() {
    return this.shareEvent$;
  }

  // ['updateDesigns'] design-item-component => design-editor-component
  // ['closeSidenav'] design-popup-component => app-component
  // ['userChangeStatusEmitter'] user login (login comp) or logout (content-component) or
  //     markCommentsAsReaded (content-component) emitter =>
  //     content-component (update unreaded comments length)

  // events on any changes in comments
  sharingEventToReloadComments(event?: any) {
    console.log('sharing service event', event);
    this.eventToReloadComments.next(event);
  }

  // if event === null - reload comment based variables (like unreaded comments length)
  // if event === {sort, skip, limit, displayFilter} - should reload comments in comments-list component

  getEventToReloadComments() {
    return this.eventToReloadComments$;
  }

  // sending feedback message
  sendFeedbackMessage(feedback, recaptcha): Observable<any> {
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
    return this.http.post<any>(
      'api/shared/send-feedback-message',
      feedback,
      httpOptions
    );
  }

  checkFile(file: File): any {
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
