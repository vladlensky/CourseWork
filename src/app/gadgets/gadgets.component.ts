import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '../main.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent implements OnInit {
  gadgets;
  person;
  constructor(private router: Router, private route: ActivatedRoute, private service: MainService) {
    this.route.params.subscribe(params => {
      if (!isUndefined(params['Nickname'])) {
        this.person = this.service.getPerson(params['Nickname']).subscribe(value => {
            this.person = value;
          },
          error => {
          });
        } else {
        this.service.getPerson(this.service.getAuthPerson()).subscribe(value => {
            this.person = value;
          },
          error => {
          });
      }
    });
    this.service.getAllGadgets().subscribe(value => {
        this.gadgets = value;
      },
      error => {
      });
  }

  ngOnInit() {
  }
  getPoints (type) {
    if (type === 'assault') {
      return this.person.assaultPoints;
    }
    if (type === 'recon') {
      return this.person.reconPoints;
    }
    if (type === 'engineer') {
      return this.person.engineerPoints;
    }
    if (type === 'support') {
      return this.person.supportPoints;
    }
    if (type === 'general') {
      return this.person.totalScore;
    }
  }
  returnToMyStats() {
    this.router.navigate(['/stats']);
  }
}
