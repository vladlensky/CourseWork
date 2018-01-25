import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {MainService} from '../main.service';
import {Info} from '../classes';
import {isUndefined} from 'util';
import {forEach} from '@angular/router/src/utils/collection';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  person =  new Info;
  @ViewChild('search') searchField: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('med') med: ElementRef;
  @ViewChild('assault') assault: ElementRef;
  @ViewChild('sniper') sniper: ElementRef;
  @ViewChild('eng') eng: ElementRef;
  @ViewChild('exit') exit: ElementRef;
  @ViewChild('returnBack') returnBack: ElementRef;
  users;
  tempUsers;
  beginNumber = 4123;
  endNumber = 12567;
  medPoints = 5434;
  engPoints = 8643;
  assaultPoints = 78534;
  sniperPoints = 31233;
  maxEP = 80000;
  maxMP = 70000;
  maxAP = 100000;
  maxSP = 70000;
  wins = 738;
  losses = 1052;
  deaths = 3589;
  kills = 4658;
  wlRatio = 0;
  kdRatio = 0;
  constructor(private cookieService: CookieService, private service: MainService, private translate: TranslateService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (cookieService.get('AllUsers') !== '') {
        this.users = cookieService.get('AllUsers');
      } else {
        this.service.getAllUsersNames().subscribe(value => {
            this.users = value;
            this.tempUsers = this.users;
          },
          error => {
          });
        cookieService.set('AllUsers', this.users);
      }
      if (!isUndefined(params['Nickname'])) {
        this.service.getPerson(params['Nickname']).subscribe(value => {
            this.person = value;
            this.fill();
            this.draw();
          },
          error => {
          });
      } else {
        this.service.getPerson(this.service.getAuthPerson()).subscribe(value => {
            this.person = value;
            this.fill();
            this.draw();
          },
          error => {
          });
      }
    });
  }

  ngOnInit() {
    if (this.person.nickName === this.service.getAuthPerson()) {
      this.returnBack.nativeElement.remove();
    } else { this.exit.nativeElement.remove(); }
  }
  fill() {
    this.wins = this.person.wins;
    this.deaths = this.person.deaths;
    this.losses = this.person.losses;
    this.kills = this.person.kills;
    this.wlRatio = Math.round(this.wins / this.losses * 100) / 100;
    this.kdRatio = Math.round(this.kills / this.deaths * 100) / 100;
    this.beginNumber = this.person.totalScore - this.person.scoreForThisLvl;
    this.endNumber = this.person.scoreForNextLvl - this.person.scoreForThisLvl;
    this.medPoints = this.person.supportPoints;
    this.engPoints = this.person.engineerPoints;
    this.assaultPoints = this.person.assaultPoints;
    this.sniperPoints = this.person.reconPoints;
  }
  draw() {
    let context = this.canvas.nativeElement.getContext('2d');
    const centerX = this.canvas.nativeElement.width / 2;
    const centerY = this.canvas.nativeElement.height / 2;
    const radius = 69;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0,  2 * Math.PI, false);
    context.lineWidth = 7;
    context.strokeStyle = '#3b3b3b';
    context.stroke();
    context.beginPath();
    context.arc(centerX, centerY, radius, 3 * Math.PI / 2,  3 * Math.PI / 2 + 2 * Math.PI * this.beginNumber / this.endNumber, false);
    context.lineWidth = 12;
    context.strokeStyle = 'green';
    context.stroke();
    context.beginPath();
    context.strokeStyle = '#3b3b3b';
    context.lineWidth = 3;
    context.font = 'italic 15pt Arial';
    context.fillText('' + this.beginNumber + ' / ' + this.endNumber, centerX - radius + 10, centerY + 5, 120);
    //
    context = this.med.nativeElement.getContext('2d');
    context.beginPath();
    context.moveTo(0, 50);
    context.lineWidth = 202;
    context.strokeStyle = 'blue';
    context.lineTo(this.medPoints / this.maxMP * this.med.nativeElement.width, 50);
    context.stroke();
    //
    context = this.assault.nativeElement.getContext('2d');
    context.beginPath();
    context.moveTo(0, 50);
    context.lineWidth = 202;
    context.strokeStyle = 'green';
    context.lineTo(this.assaultPoints / this.maxAP * this.assault.nativeElement.width, 50);
    context.stroke();
    //
    context = this.sniper.nativeElement.getContext('2d');
    context.beginPath();
    context.moveTo(0, 50);
    context.lineWidth = 202;
    context.strokeStyle = 'red';
    context.lineTo(this.sniperPoints / this.maxSP * this.sniper.nativeElement.width, 50);
    context.stroke();
    //
    context = this.eng.nativeElement.getContext('2d');
    context.beginPath();
    context.moveTo(0, 50);
    context.lineWidth = 202;
    context.strokeStyle = 'yellow';
    context.lineTo(this.engPoints / this.maxEP * this.eng.nativeElement.width, 50);
    context.stroke();
  }
  searchUsers() {
    const searchValue = this.searchField.nativeElement.value;
    this.tempUsers = [];
    if (searchValue === '') {
      this.tempUsers = this.users;
    }
    const temp = [];
    this.users.forEach(function(item, i) {
      if (item.search(searchValue) !== -1) {
        temp[temp.length] = item;
      }
    });
    this.tempUsers = temp;
  }
}
