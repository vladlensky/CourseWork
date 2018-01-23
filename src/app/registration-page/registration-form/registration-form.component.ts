import { Component, OnInit } from '@angular/core';
import {Person} from '../../classes';
import {MainService} from '../../main.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  person = new Person();
  error_message;
  constructor(private service: MainService, private translate: TranslateService) {}

  ngOnInit() {
    this.person.Nickname = '';
    this.person.password = '';
  }
  add_person() {
    // event.preventDefault();
    // this.error_message = this.service.add_person(this.person);
  }
}

