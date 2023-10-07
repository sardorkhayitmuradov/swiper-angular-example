import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-slide-one',
  templateUrl: './slide-one.component.html',
  styleUrls: ['./slide-one.component.css'],
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
export class SlideOneComponent implements OnInit {
  public animate: boolean = false;

  @HostBinding('@fadeIn')
  get fadeIn() {
    return this.animate ? 'active' : 'inactive';
  }
  constructor() {}

  ngOnInit() {}
}
