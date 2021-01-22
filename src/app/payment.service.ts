import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  _url = 'http://localhost/salespage/payment.php';
  constructor(private _http: HttpClient) { }

  enroll(data: Payment) { 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    
    return this._http.post<any>(this._url, data, {
      headers: headers,
      responseType: 'json'
    });

  }
}
