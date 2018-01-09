import { Component } from '@angular/core';
import {Person} from '../../classes';
import {MainService} from '../../main.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  error_message = '';
  person = new Person();

  constructor(private service: MainService) { }
  checkPerson () {
    // event.preventDefault();
    // if (this.service.checkNickname(this.person)){
    //   this.error_message = 'Incorrect nickname';
    //   return false;
    // }
    // if(!this.service.checkPassword(this.person)) {
    //   this.error_message = 'Incorrect password';
    // }
  }

}
