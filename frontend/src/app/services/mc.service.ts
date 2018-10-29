import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class McService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   *
   *
   * @returns {Observable<IResponse>}
   * @memberof McService
   */
  getMcs(): Observable<IResponse> {
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

  /**
   * return children
   *
   * @param {string} parent
   * @param {string} collection
   * @param {boolean} [displayFilter]
   * @returns {Observable<IResponse>}
   * @memberof McService
   */
  getMcsByParent(parent: string, collection: string, displayFilter?: boolean): Observable<IResponse> {
    if (!displayFilter) {
      displayFilter = false;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('parent', parent)
        .set('displayFilter', displayFilter + '')
        .set('collection', collection)
    };
    return this.http.get<IResponse>(
      'api/mc/get-mcs-by-parent',
      httpOptions
    );
  }


  /**
   *  return all descendants
   *
   * @param {string} [parent='products']
   * @param {string} sort
   * @param {number} [sortOrder=1]
   * @param {number} [skip=0]
   * @param {number} [limit=10]
   * @returns {Observable<[any]>}
   * @memberof McService
   */
  getMcsByFilter(
    parent: string = 'products', sort: string, sortOrder: number = 1, skip: number = 0, limit: number = 10, noMoreChildren: boolean
    ): Observable<[any]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({ fromObject: {
        parent, sort, sortOrder: sortOrder + '', skip: skip + '', limit: limit + '', noMoreChildren: noMoreChildren + ''
      }}),
    };
    return this.http.get<[any]>(
      'api/mc/get-mcs-by-filter',
      httpOptions
    );
  }

}
