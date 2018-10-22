import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { IResponse } from '../interfaces/server-response-interface';

@Injectable({
  providedIn: 'root'
})
export class McService {

  constructor(
    private http: HttpClient,
  ) { }

  getMcs() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      // params: new HttpParams().set('category', category)
    };
    return this.http.get<IResponse>(
      'api/mc/get-mcs',
      httpOptions
    );
  }
}
