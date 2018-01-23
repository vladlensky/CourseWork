import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Urls} from './classes';

@Injectable()
export class MainService {
  urls: Urls;
  constructor(private httpClient: HttpClient) { }
  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  public postLogin(login: String, password: String): Observable<any> {
    return this.httpClient.post(this.urls.loginUrl, {login, password});
  }
  public postRegistration(login: String, password: String): Observable<any> {
    return this.httpClient.post(this.urls.registrationUrl, {login, password});
  }
}
