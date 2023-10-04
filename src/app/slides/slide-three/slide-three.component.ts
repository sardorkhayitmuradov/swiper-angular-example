import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slide-three',
  templateUrl: './slide-three.component.html',
  styleUrls: ['./slide-three.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SlideThreeComponent implements OnInit, AfterViewInit {
  @Input() animate: boolean = false;
  isActive = false;
  constructor() {}

  ngOnInit() {
    console.log('init three');
  }
  ngAfterViewInit() {
    console.log(this.isActive);
  }
}
