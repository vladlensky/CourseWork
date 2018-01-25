import { Component } from '@angular/core';
import {Person} from '../../classes';
import {MainService} from '../../main.service';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  error_message = '';
  person = new Person();

  constructor(private service: MainService, private translate: TranslateService, private cookieService: CookieService) { }
  checkPerson () {
    this.service.postLogin(this.person.Nickname, this.person.password).subscribe(value => {
        if (value === 'AllIsCorrect') {
          this.cookieService.set('Nickname', this.person.Nickname);
        } else {
          this.error_message = value;
        }
      },
      error => {
        // error - объект ошибки
      });
  }

}
