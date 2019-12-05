import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IProduct } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbService {
    private http: HttpClient;

  constructor(
    protected injector: Injector,
  ) {
    this.http = injector.get(HttpClient);
   }

  /**
   *
   *
   */
  itemsByParent(
    collection: string,
    parent: string,
    displayFilter?: boolean,
    sort?: number,
    skip?: number,
    limit?: number
  ): Observable<[{ total: { totalItemsLength: number }, items: IProduct[] | any[] }]> {
    if (!displayFilter) {
      displayFilter = false;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('displayFilter', displayFilter + '')
        .set('sort', sort + '')
        .set('skip', skip + '')
        .set('limit', limit + '')
    };
    return this.http.get<[{ total: { totalItemsLength: number }, items: IProduct[] | any[] }]>(
      'api/db/items-by-parent/' + collection + '/' + parent,
      httpOptions
    );
  }

}
