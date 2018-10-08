import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IResponse } from '../interfaces/server-response-interface';
import { Observable, of } from 'rxjs';
import { IProduct } from '../interfaces/product-interface';
import { UserService } from './user.service';
import { config } from '../app.config';
import { IDesign } from '../interfaces/interface';


@Injectable()
export class ProductService {
  config = config;

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }



  // getProductById(_id) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //     }),
  //     params: new HttpParams().set('_id', _id)
  //   };
  //   return this.http.get<IResponse>(
  //     'api/product/get-product-by-id',
  //     httpOptions
  //   );
  // }


  getProductsWithGallery() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/product/get-products-with-gallery',
      httpOptions
    );
  }

  getProductsByDesignId(design_id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('design_id', design_id)
    };
    return this.http.get<IResponse>(
      'api/product/get-products-by-design-id',
      httpOptions
    );
  }

  // getRecommendations() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //     }),
  //   };
  //   return this.http.get<IResponse>(
  //     'api/product/get-recommendations',
  //     httpOptions
  //   );
  // }

  // getRecommendationsByIds(ids) {
  //   // console.log('service ids', ids);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //     }),
  //     params: new HttpParams().set('ids', ids)
  //   };
  //   return this.http.get<IResponse>(
  //     'api/product/get-recommendations-by-ids',
  //     httpOptions
  //   );
  // }

  // getProductsByRecommendation(recommendation) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //     }),
  //     params: new HttpParams().set('recommendation', recommendation)
  //   };
  //   return this.http.get<IResponse>(
  //     'api/product/get-products-by-recommendation',
  //     httpOptions
  //   );
  // }

  getProducts(category) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('category', category)
    };
    return this.http.get<IResponse>(
      'api/product/get-products',
      httpOptions
    );
  }

  getMainPageProducts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IResponse>(
      'api/product/get-main-page-products',
      httpOptions
    );
  }

  productAddImage(file, sku): Observable<IResponse> {
    console.log('file', file);
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('sku', sku);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/add-image',
      formData,
      httpOptions
    );
  }

  productCreate(product: IProduct): Observable<IResponse> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/create',
      product,
      httpOptions
    );
  }

  productEdit(product: IProduct): Observable<IResponse> {
    console.log('prodEdit', product);
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.put<IResponse>(
      'api/product/edit',
      product,
      httpOptions
    );
  }

  productDelete(_id: string): Observable<IResponse> {
    console.log('config', config.serverUrl);
    console.log('this.config', this.config.serverUrl);
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.delete<IResponse>(
      'api/product/delete/' + _id,
      httpOptions
    );
  }

  productAddBriefImage(file, _id): Observable<IResponse> {
    console.log('file', file);
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('_id', _id);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/add-brief-image',
      formData,
      httpOptions
    );
  }

  productAddAssets(file, _id): Observable<IResponse> {
    console.log('file', file);
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('_id', _id);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/add-assets',
      formData,
      httpOptions
    );
  }

  getTechAssets(): Observable<IResponse> {
    return of({ success: true, message: '', data: this.config.techAssets });
  }

  getCertAssets(): Observable<IResponse> {
    return of({ success: true, message: '', data: this.config.certAssets });
  }

  productAddTechAssets(file, _id): Observable<IResponse> {
    console.log('file', file);
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('_id', _id);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/add-techassets',
      formData,
      httpOptions
    );
  }

  /**
   *
   *
   * @param {File} file
   * @param {string} _id
   * @returns {Observable<IResponse>}
   * @memberof ProductService
   */
  productAddMenuImage(file: File, _id: string): Observable<IResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('_id', _id);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/add-menu-image',
      formData,
      httpOptions
    );
  }

  /**
   *
   *
   * @param {string} _id
   * @returns {Observable<IResponse>}
   * @memberof ProductService
   */
  increaseViews(_id: string): Observable<IResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
      .set('_id', _id)
    };

    return this.http.get<IResponse>(
      'api/product/increase-views',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {File} file
   * @param {string} _id
   * @returns {Observable<IResponse>}
   * @memberof ProductService
   */
  productAddMainImage(file: File, _id: string): Observable<IResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('_id', _id);

    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/add-main-image',
      formData,
      httpOptions
    );
  }

  /**
   *
   *
   * @param {File} file
   * @returns {IResponse}
   * @memberof ProductService
   */
  checkFile(file: File): IResponse {
    if (!file) {
      return ({ success: false, message: 'Файл не вибрано' });
    } else if (file.size > 10485760) { // 10 * 1024 * 1024
      return ({ success: false, message: 'Розмір файлу повинен бути менше 10Мб' });
    } else if (
      file.type !== 'image/jpg' &&
      file.type !== 'image/jpe' &&
      file.type !== 'image/gif' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/bmp' &&
      file.type !== 'image/png' &&
      file.type !== 'image/svg+xml' &&
      file.type !== 'image/webp') {
      return ({ success: false, message: 'Виберіть інший тип файлу' });
    } else {
      return ({ success: true, message: '' });
    }
  }

  /**
   *
   *
   * @param {IProduct} product
   * @returns {Observable<IResponse>}
   * @memberof ProductService
   */
  productUpsert(product: IProduct): Observable<IResponse> {
    const token = this.userService.userLocalGetToken('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.post<IResponse>(
      'api/product/upsert',
      product,
      httpOptions
    );
  }

  /**
   *
   *
   * @returns {Observable<{_id: string}[]>}
   * @memberof ProductService
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
      'api/product/get-sku-list',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {string} _id
   * @param {boolean} [displayFilter]
   * @returns {Observable<IResponse>}
   * @memberof ProductService
   */
  getProductById(_id: string, displayFilter?: boolean): Observable<IResponse>  {
    if (!displayFilter) {
      displayFilter = false;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('_id', _id)
        .set('displayFilter', displayFilter + '')
    };
    return this.http.get<IResponse>(
      'api/product/get-product-by-id',
      httpOptions
    );
  }

  /**
   *
   *
   * @param {string} parent
   * @param {boolean} [displayFilter]
   * @returns {Observable<IResponse>}
   * @memberof ProductService
   */
  getProductsByParent(parent: string, displayFilter?: boolean): Observable<IResponse> {
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
    return this.http.get<IResponse>(
      'api/product/get-products-by-parent',
      httpOptions
    );
  }

}



