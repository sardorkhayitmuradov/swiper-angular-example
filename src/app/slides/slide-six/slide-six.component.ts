import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-slide-six',
  templateUrl: './slide-six.component.html',
  styleUrls: ['./slide-six.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SlideSixComponent {
  public animate: boolean = false;

  @HostBinding('@fadeIn')
  get fadeIn() {
    return this.animate ? 'active' : 'inactive';
  }
  constructor() {}

  ngOnInit() {}
}
