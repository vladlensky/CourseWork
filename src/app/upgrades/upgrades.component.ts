import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '../main.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {
  upgrades;
  weapon;
  constructor(private router: Router, private route: ActivatedRoute, private service: MainService) {
    this.route.params.subscribe(params => {
      if (!isUndefined(params['name'])) {
        this.service.getWeaponInfo(params['name']).subscribe(value => {
            this.weapon = value;
          },
          error => {
          });
        this.service.getUpgrades(params['name']).subscribe(value => {
            this.upgrades = value;
          },
          error => {
          });
      }
    });
  }

  ngOnInit() {
  }
  returnToMyStats() {
    this.router.navigate(['/stats']);
  }

}
