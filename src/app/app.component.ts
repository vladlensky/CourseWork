import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private translate: TranslateService, private cookieService: CookieService) {
    if (this.cookieService.get('language') === '') {
      this.cookieService.set( 'language', 'en' );
      translate.setDefaultLang('en');
      translate.use('en');
    } else {
      translate.use(this.cookieService.get('language'));
    }
  }
}
