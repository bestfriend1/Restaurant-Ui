import { Injectable } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow,EffectFade,Autoplay,Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([EffectCoverflow,EffectFade,Autoplay,Pagination, Navigation]);

@Injectable({
  providedIn: 'root'
})
export class CarouselControllService {

  constructor() { }
}
