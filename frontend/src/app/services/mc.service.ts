import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable } from 'rxjs';
import { IMc } from '../interfaces/interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class McService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
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

  mcUpsert(mc: IMc): Observable<IResponse> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/mc/upsert',
      mc,
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
    parent: string = 'products', sort: string, sortOrder: number = 1, skip: number = 0, limit: number = 10, noMoreChildren: string
    ): Observable<IMc[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({ fromObject: {
        parent, sort, sortOrder: sortOrder + '', skip: skip + '', limit: limit + '', noMoreChildren
      }}),
    };
    return this.http.get<IMc[]>(
      'api/mc/get-mcs-by-filter',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {File} file
   * @param {string} _id
   * @returns {Observable<string>}
   * @memberof McService
   */
  addMainImage(file: File, _id: string): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('_id', _id);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<string>(
      'api/mc/add-main-image',
      formData,
      httpOptions
    );
  }

  /**
   *
   *
   * @param {File} file
   * @param {string} _id
   * @returns {Observable<string>}
   * @memberof McService
   */
  addStepsPic(file: File, _id: string): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('_id', _id);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<string>(
      'api/mc/add-steps-pic',
      formData,
      httpOptions
    );
  }

  /**
   *
   *
   * @returns {Observable<{_id: string}[]>}
   * @memberof McService
   */
  getSkuList():  Observable<{_id: string}[]> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.get<{_id: string}[]>(
      'api/mc/get-sku-list',
      httpOptions
    );
  }

  mcLocalSetFilter(filter: {mcSortValue: string, mcFilterValue: string, noMoreChildren: string}): void {
    localStorage.setItem('mcQueryParams', JSON.stringify(filter));
  }

  mcLocalGetFilter(): {mcSortValue: string, mcFilterValue: string, noMoreChildren: string} | null {
    return JSON.parse(localStorage.getItem('mcQueryParams'));
  }

  mcLocalRemoveFilter(): void {
    localStorage.removeItem('mcQueryParams');
  }

}
