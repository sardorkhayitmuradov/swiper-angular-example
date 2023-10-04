import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SwiperModule } from "swiper/angular";
import { SlideOneComponent } from "./slides/slide-one/slide-one.component";
import { SlideTwoComponent } from "./slides/slide-two/slide-two.component";
import { SlideThreeComponent } from "./slides/slide-three/slide-three.component";
import { SlideFourComponent } from "./slides/slide-four/slide-four.component";
import { DynamicComponentLoaderComponent } from "./dynamic-loader/dynamic-loader.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, SwiperModule],
  declarations: [AppComponent, SlideOneComponent, SlideTwoComponent, SlideThreeComponent, SlideFourComponent, DynamicComponentLoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
