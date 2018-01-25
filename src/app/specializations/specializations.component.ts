import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '../main.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-specializations',
  templateUrl: './specializations.component.html',
  styleUrls: ['./specializations.component.css']
})
export class SpecializationsComponent implements OnInit {
  specializations;
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
    this.service.getAllSpecializations().subscribe(value => {
        this.specializations = value;
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
