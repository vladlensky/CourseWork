import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  beginNumber = 4123;
  endNumber = 12567;
  constructor() { }

  ngOnInit() {
    const context = this.canvas.nativeElement.getContext('2d');
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
  }

}
