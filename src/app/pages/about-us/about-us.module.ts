import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SwiperModule } from 'swiper/angular';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SwiperModule
  ]
})
export class AboutUsModule { }
