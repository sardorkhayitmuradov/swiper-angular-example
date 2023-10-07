import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slide-seven',
  templateUrl: './slide-seven.component.html',
  styleUrls: ['./slide-seven.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SlideSevenComponent {
  public animate: boolean = false;

  @HostBinding('@fadeIn')
  get fadeIn() {
    return this.animate ? 'active' : 'inactive';
  }
  constructor() {}

  ngOnInit() {}
}
