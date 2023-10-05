import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-slide-five',
  templateUrl: './slide-five.component.html',
  styleUrls: ['./slide-five.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SlideFiveComponent {
  public animate: boolean = false;

  @HostBinding('@fadeIn')
  get fadeIn() {
    return this.animate ? 'active' : 'inactive';
  }
  constructor() {}

  ngOnInit() {}
}
