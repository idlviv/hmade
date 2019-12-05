import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IResponse } from '../../interfaces';
import { Observable } from 'rxjs';
import { ICatalog } from '../../interfaces';
import { ITopMenu } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get top menu items
   *      common(top level of site menu),
   *      system(top level of system menu)
   */
  getTopMenu(): Observable<ITopMenu> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<ITopMenu>(
      'api/catalog/get-top-menu',
      httpOptions
    );
  }

  /**
   * get all parents of _id (category in catalog) to hierarchy array
   * Name and _id of current category
   *
   */
  getAllParents(_id): Observable<{ _id: string, name: string, hierarchy: ICatalog[] }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('category_id', _id)
    };
    return this.http.get<{ _id: string, name: string, hierarchy: ICatalog[] }>(
      'api/catalog/get-all-parents',
      httpOptions
    );
  }

  /**
   * Get all parents of category(_id)
   * included current category
   * excluded root categories: home and common
   *
   */
  getAllParentsInclCurrentCategory(_id, topLevel: string): Observable<ICatalog[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('_id', _id).set('topLevel', topLevel)
    };
    return this.http.get<ICatalog[]>(
      'api/catalog/get-all-parents-incl-current-category',
      httpOptions
    );
  }


  /**
   * Get prefix of category
   *
   */
  getPrefix(_id: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          _id
        }
      })
    };
    return this.http.get<string>(
      'api/catalog/get-prefix',
      httpOptions
    );
  }

  // getSiblings(_id: string): Observable<IResponse> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //     params: new HttpParams({
  //       fromObject: {
  //         _id
  //       }
  //     })
  //   };
  //   return this.http.get<IResponse>(
  //     'api/catalog/get-siblings',
  //     httpOptions
  //   );
  // }

  /**
   * Get catalog category by _id
   *
   */
  getCategoryById(_id: string): Observable<ICatalog> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          _id
        }
      })
    };
    return this.http.get<ICatalog>(
      'api/catalog/get-category-by-id',
      httpOptions
    );
  }

  /**
   * Get all children of category(_id)
   *
   */
  getChildren(parent: string): Observable<ICatalog[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          parent
        }
      })
    };
    return this.http.get<ICatalog[]>(
      'api/catalog/get-Children',
      httpOptions
    );
  }

  /**
   *
   *
   */
  getDescendants(parent: string, depth: number): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          parent,
          depth: depth + ''
        }
      })
    };
    return this.http.get<IResponse>(
      'api/catalog/get-descendants',
      httpOptions
    );
  }
}
