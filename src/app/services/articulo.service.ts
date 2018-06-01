import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BASE_URL } from '../config/webService.config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticuloService {

  constructor(
    private _http: HttpClient
  ) { }

  get(page: any, pre_page: any, order_by: any, query:any): Observable<any> {
    const url = BASE_URL + 'articulos';
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Token');
    return this._http.get(url, {
      headers: headers,
      params: {
        'page': page,
        'per_page': pre_page,
        'order_by': order_by,
        'query': query  
      }
    });
  }

}
