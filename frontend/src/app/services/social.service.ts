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

  addComment(parent_id: string, parentCategory: string, comment: string): Observable<boolean> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };

    return this.http.post<boolean>(
      'api/social/add-comment',
      {comment, parent_id, parentCategory},
      httpOptions
    );
  }

  getComments(parent_id: string, sort: number, skip: number, limit: number, displayFilter: boolean): Observable<IComment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
      .set('parent_id', parent_id)
      .set('sort', sort + '')
      .set('skip', skip + '')
      .set('limit', limit + '')
      .set('displayFilter', displayFilter + '')
    };

    return this.http.get<IComment[]>(
      'api/social/get-comments',
      httpOptions
    );
  }
}
