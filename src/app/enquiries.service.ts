import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enquiries } from './enquiries';

@Injectable({
  providedIn: 'root'
})
export class EnquiriesService {

  _url = 'https://poslitesoftware.com/poslite/';
  constructor(private _http: HttpClient) { }

  enroll(enquiries: Enquiries) { 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    
    return this._http.post<any>(this._url, enquiries, {
      headers: headers,
      responseType: 'json'
    });

  }
}
