import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Urls} from './classes';
import {CookieService} from 'ngx-cookie-service';
import {isUndefined} from 'util';

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
  public getAllGadgets(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getAllGadgets');
  }
  public getAllSpecializations(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getAllSpecializations');
  }
  public getUpgrades(name: String): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getUpgrades/' + name);
  }
  public getPerson(name: String): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getUser/' + name);
  }
  public getTopWeapon(name: String): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getTopWeapon/' + name);
  }
  public getAllUsersNames(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getAllUsersNames');
  }
  public getTop(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getTop');
  }
  public togglePrivacy(Nickname): Observable<any> {
    return this.httpClient.get('http://localhost:8080/changePrivacy/' + Nickname);
  }
  public getWeaponInfo(name): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getWeaponInfo/' + name);
  }
  public getAuthPerson(): String {
    return this.cookieService.get('Nickname');
  }
  public auth() {
    return this.cookieService.get('Nickname') !== null && !isUndefined(this.cookieService.get('Nickname')) && this.cookieService.get('Nickname') !== '';
  }
}
