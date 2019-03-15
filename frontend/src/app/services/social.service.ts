import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { IComment } from '../interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(
    private userService: UserService,
    private http: HttpClient,
  ) { }

  deleteComment(parent_id: string, parentCategory: string, comment_id: string): Observable<boolean> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      }),
      params: new HttpParams()
      .set('parent_id', parent_id)
      .set('parentCategory', parentCategory)
      .set('comment_id', comment_id)
    };
    return this.http.delete<boolean>(
      'api/social/delete-comment/',
      httpOptions
    );
  }

  addComment(parent_id: string, parentCategory: string, comment: string, recaptcha): Observable<boolean> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      }),
      params: new HttpParams({ fromObject: {
        recaptcha
      }})
    };

    return this.http.post<boolean>(
      'api/social/add-comment',
      {parent_id, parentCategory, comment},
      httpOptions
    );
  }

  getComments(parent_id: string, parentCategory: string, sort: number, skip: number,
    limit: number, displayFilter: boolean, commentsReadedTillFilter: any = false ):
    Observable<{comments: IComment[], commentsTotalLength: number}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
      .set('parent_id', parent_id)
      .set('parentCategory', parentCategory)
      .set('sort', sort + '')
      .set('skip', skip + '')
      .set('limit', limit + '')
      .set('displayFilter', displayFilter + '')
      .set('commentsReadedTillFilter', commentsReadedTillFilter + '')
    };
    return this.http.get<{comments: IComment[], commentsTotalLength: number}>(
      'api/social/get-comments',
      httpOptions
    );
  }

    /**
   * get current user unreaded commnets
   *
   * @param {}
   * @returns {Observable<[]>}
   * @memberof SocialService
   */
  getUnreadedCommentsCategories(): Observable<any[]>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any[]>(
      'api/social/get-unreaded-comments-categories',
      httpOptions
    );
  }

  /**
   * get current user unreaded commnets length
   *
   * @param {}
   * @returns {Observable<number>}
   * @memberof SocialService
   */
  getUnreadedCommentsLength(): Observable<number>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      // params: new HttpParams()
      //   .set('commentsReadedTill', commentsReadedTill + '')
    };
    return this.http.get<number>(
      'api/social/get-unreaded-comments-length',
      httpOptions
    );
  }

  displayComment(parent_id: string, parentCategory: string, display: boolean, comment_id: string): Observable<boolean> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.put<boolean>(
      'api/social/display-comment',
      {parent_id, parentCategory, display, comment_id},
      httpOptions
    );
  }

  likesSet(parent_id: string, parentCategory: string, action: boolean) {

    // action is true for like, is false for dislike
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };

    return this.http.put<boolean>(
      'api/social/likes-set',
      {parent_id, parentCategory, action},
      httpOptions
    );
  }
}
