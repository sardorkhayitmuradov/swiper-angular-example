import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-four',
  templateUrl: './slide-four.component.html',
  styleUrls: ['./slide-four.component.css']
})
export class SlideFourComponent implements AfterViewInit {
  animate: boolean = false;
  isActive =false
  constructor() { }

  ngAfterViewInit(){
    this.animate = false
  }

}