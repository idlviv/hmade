import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(
    private userService: UserService,
    private http: HttpClient,
  ) { }

  addComment(parent_id: string, parentCategory: string, comment: string) {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };

    return this.http.post(
      'api/social/add-comment',
      {comment, parent_id, parentCategory},
      httpOptions
    );
  }
}
