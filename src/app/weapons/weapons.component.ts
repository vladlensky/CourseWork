import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '../main.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  nickname;
  weapons;
  constructor(private router: Router, private route: ActivatedRoute, private service: MainService) {
    this.route.params.subscribe(params => {
      if (!isUndefined(params['Nickname'])) {
            this.nickname = params['Nickname'];
            this.getWeapons();
      } else {
        this.service.getPerson(this.service.getAuthPerson()).subscribe(value => {
            this.nickname = value.nickName;
            this.getWeapons();
          },
          error => {
          });
      }
    });
  }

  getWeapons() {
    this.service.getAllWeapons(this.nickname).subscribe(value => {
        this.weapons = value;
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
