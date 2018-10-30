import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable } from 'rxjs';
import { IMc } from '../interfaces/interface';

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
   *
   *
   * @param {string} _id
   * @returns {Observable<IMc>}
   * @memberof McService
   */
  getMcById(_id: string): Observable<IMc>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IMc>(
      'api/mc/get-mc-by-id/' + _id,
      httpOptions
    );
  }

  /**
   *
   *
   * @param {string} parent
   * @param {boolean} [displayFilter]
   * @returns {Observable<IMc[]>}
   * @memberof McService
   */
  getMcsByParent(parent: string, displayFilter?: boolean): Observable<IMc[]> {
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
    };
    return this.http.get<IMc[]>(
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
   * @returns {Observable<IMc[]>}
   * @memberof McService
   */
  getMcsByFilter(
    parent: string = 'products', sort: string, sortOrder: number = 1, skip: number = 0, limit: number = 10, noMoreChildren: boolean
    ): Observable<IMc[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({ fromObject: {
        parent, sort, sortOrder: sortOrder + '', skip: skip + '', limit: limit + '', noMoreChildren: noMoreChildren + ''
      }}),
    };
    return this.http.get<IMc[]>(
      'api/mc/get-mcs-by-filter',
      httpOptions
    );
  }

}
