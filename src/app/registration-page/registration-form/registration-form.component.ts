import { Component, OnInit } from '@angular/core';
import {Person} from '../../classes';
import {MainService} from '../../main.service';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  person = new Person();
  error_message;
  constructor(private service: MainService) {}

  ngOnInit() {
    this.person.Name = '';
    this.person.Nickname = '';
    this.person.Surname = '';
    this.person.email = '';
    this.person.password = '';
  }
  add_person() {
    // event.preventDefault();
    // this.error_message = this.service.add_person(this.person);
  }
}

