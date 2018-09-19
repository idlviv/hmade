import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUser } from '../interfaces/user-interface';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable } from 'rxjs';

@Injectable()
export class CatalogService {

  constructor(
    private http: HttpClient
  ) { }

  getPrefix(category: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        category
      }})
    };
    return this.http.get<IResponse>(
      'api/catalog/get-prefix',
      httpOptions
    );
  }







  getMainMenu(): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/catalog/get-main-menu',
      httpOptions
    );
  }

  getAllParents(category_id): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams().set('category_id', category_id)
    };
    return this.http.get<IResponse>(
      'api/catalog/get-all-parents',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {string} parent
   * @param {number} depth
   * @returns {Observable<IResponse>}
   * @memberof CatalogService
   */
  getDescendants(parent: string, depth: number): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        parent,
        depth: depth + ''
      }})
    };    return this.http.get<IResponse>(
      'api/catalog/get-descendants',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {string} parent
   * @returns {Observable<IResponse>}
   * @memberof CatalogService
   */
  getChildren(parent: string): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
        parent
      }})
    };
    return this.http.get<IResponse>(
      'api/catalog/get-Children',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {string} _id
   * @returns {Observable<IResponse>}
   * @memberof CatalogService
   */
  getCategoryById(_id: string): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      params: new HttpParams({ fromObject: {
          _id
      }})
    };
    return this.http.get<IResponse>(
      'api/catalog/get-category-by-id',
      httpOptions
    );
  }

}
