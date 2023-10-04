import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-two',
  templateUrl: './slide-two.component.html',
  styleUrls: ['./slide-two.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SlideTwoComponent implements OnInit, AfterViewInit {
  public animate: boolean = false;

  @HostBinding('@fadeIn')
  get fadeIn() {
    return this.animate ? 'active' : 'inactive';
  }
  
  constructor() { }

  ngOnInit() {
    console.log("init two")
  }
  ngAfterViewInit(){
    console.log(this.animate)
  }
}