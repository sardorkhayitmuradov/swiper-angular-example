import { HostBinding, Component, Input, OnInit } from '@angular/core';
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
export class SlideThreeComponent {
  public animate: boolean = false;

  @HostBinding('@fadeIn')
  get fadeIn() {
    return this.animate ? 'active' : 'inactive';
  }
  constructor() {}

  ngOnInit() {}
}
