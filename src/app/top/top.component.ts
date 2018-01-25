import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  users;
  constructor(private router: Router, private service: MainService) {
    this.service.getTop().subscribe(value => {
        this.users = value;
      },
      error => {
      });
  }

  ngOnInit() {
  }

  returnToMyStats() {
    this.router.navigate(['/stats']);
  }
}
