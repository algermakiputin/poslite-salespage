import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  _url = 'https://poslitesoftware.com/mail/mailer.php';
  constructor(private _http: HttpClient) { }

  enroll(data) { 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    
    console.log(data);
    return this._http.post<any>(this._url, data, {
      headers: headers,
      responseType: 'json'
    });

  }
}
