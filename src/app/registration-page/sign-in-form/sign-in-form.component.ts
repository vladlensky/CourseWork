import { Component } from '@angular/core';
import {Person} from '../../classes';
import {MainService} from '../../main.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  error_message = '';
  person = new Person();

  constructor(private service: MainService, private translate: TranslateService) { }
  checkPerson () {
    this.service.get('http://localhost:8080/getAllUsers').subscribe(value => {
        console.log(value);
      },
      error => {
        // error - объект ошибки
      });
  }

}
