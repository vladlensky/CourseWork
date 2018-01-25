import { Component, OnInit } from '@angular/core';
import {Person} from '../../classes';
import {MainService} from '../../main.service';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  person = new Person();
  error_message;
  confirm;
  constructor(private router: Router, private service: MainService, private translate: TranslateService, private cookieService: CookieService) {}

  ngOnInit() {
    this.person.Nickname = '';
    this.person.password = '';
  }
  add_person() {
    if (this.person.password === this.confirm) {
    this.service.postRegistration(this.person.Nickname, this.person.password).subscribe(value => {
        if (value === 'PersonWasSuccessfullyRegistered') {
          this.cookieService.set('Nickname', this.person.Nickname);
          this.error_message = '';
          this.router.navigate(['/stats']);
        } else {
          this.error_message = value;
        }
      },
      error => {
      });
    } else {
      this.error_message = 'wrong second password';
    }
  }
}

