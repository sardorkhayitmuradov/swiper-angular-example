import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { SlideTwoComponent } from './slides/slide-two/slide-two.component';
import { SlideOneComponent } from './slides/slide-one/slide-one.component';
import { SlideThreeComponent } from './slides/slide-three/slide-three.component';
import { SlideFourComponent } from './slides/slide-four/slide-four.component';
import { SlideFiveComponent } from './slides/slide-five/slide-five.component';
import { SlideSixComponent } from './slides/slide-six/slide-six.component';
import { SlideSevenComponent } from './slides/slide-seven/slide-seven.component';
import { SlideEightComponent } from './slides/slide-eight/slide-eight.component';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

@Component({
  selector: 'app-swiper-example',
  styles: [
    `
      .bg-yellow {
        background-color: yellow;
      }
      .transition {
        transition: background 0.25s ease, color 0.25s ease;
      }
      .active-slide {
        background-color: green;
        color: #fff;
      }
      .bg-blue {
        background-color: blue;
        color: #fff;
      }
    `,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  currentIndex = 0;
  public slides!: any;
  constructor() {
    this.slides = [
      { title: '1', component: SlideOneComponent, isActive: true },
      { title: '2', component: SlideTwoComponent, isActive: false },
      { title: '3', component: SlideThreeComponent, isActive: false },
      { title: '4', component: SlideFourComponent, isActive: false },
      { title: '5', component: SlideFiveComponent, isActive: false },
      { title: '6', component: SlideSixComponent, isActive: false },
      { title: '7', component: SlideSevenComponent, isActive: false },
      { title: '8', component: SlideEightComponent, isActive: false },
    ];
  }
  ngAfterViewInit() {
    this.loadComponent(this.currentIndex);
  }
  controlledSwiper: any;
  setControlledSwiper(swiper) {
    this.controlledSwiper = swiper;
  }
  loadComponent(index: number) {
    if (this.slides[index]) {
      this.slides[index].isActive = true;
    }
  }
  onSlideChange(swiper: any) {
    this.slides.forEach((slide, index) => {
      slide.isActive = index === swiper.snapIndex;
    });
  }
}
