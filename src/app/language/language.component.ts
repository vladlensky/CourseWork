import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  @ViewChild('ru') ru: ElementRef;
  @ViewChild('en') en: ElementRef;
  constructor (private translate: TranslateService, private cookieService: CookieService) {

  }
  ngOnInit() {
    if (this.cookieService.get('language') === 'ru') {
      this.ru.nativeElement.selected = true;
    } else {
      this.en.nativeElement.selected = true;
    }
  }

  changeLanguage(language) {
    if (this.en.nativeElement.selected) {
      this.cookieService.set('language', 'en');
    } else {
      this.cookieService.set('language', 'ru');
    }
    location.reload();
  }

}
