import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Urls} from './classes';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class MainService {
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }
  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  public postLogin(login: String, password: String): Observable<any> {
    return this.httpClient.post('http://localhost:8080/checkPerson', {login, password});
  }
  public postRegistration(login: String, password: String): Observable<any> {
    return this.httpClient.post('http://localhost:8080/registerPerson', {login, password});
  }
  public getAllWeapons(login: String): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getAllWeapons/' + login);
  }
  public getUpgrades(name: String): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getUpgrades/' + name);
  }
  public getPerson(name: String): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getUser/' + name);
  }
  public getAllUsersNames(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getAllUsersNames');
  }
  public getAuthPerson(): String {
    return this.cookieService.get('Nickname');
  }
  public auth() {
    return this.cookieService.get('Nickname') !== null;
  }
}
