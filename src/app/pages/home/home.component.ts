import { Component, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CarouselControllService } from '../../services/carousel-controll.service';
import { NgxLoaderService } from '../../services/common/ngx-loader.service';
let offerData = require('../../db/offer-data.json');
let menuData = require('../../db/menu-data.json');
let product = require('./../../db/products.json');
let bannerData = require('./../../db/banner.json');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('bigImg') bigImg!: ElementRef;
  @ViewChild('smallImg') smallImg!: ElementRef;
  @ViewChild('bgParallex') bgParallex!: ElementRef;
  /**
   * Product Store Variables
   **/
  offerDataArr = offerData.offerData;
  menuDataArr = menuData?.data;
  productArr = product?.data;
  bannerDataArr = bannerData?.data;
  slideIndex = 0;

  constructor(
    private carouselControll: CarouselControllService,
    private ngxLoader : NgxLoaderService
  ) {

  }
  ngOnInit(): void {
    this.slideShow(this.slideIndex);
    /**
     * Auto Play Slide 
     */
      setInterval(() => {
        this.nextSlide();
      }, 8000);
      


  }

  /***
   * PARRALAX EFFECT
   * onParrallaxEffect()
   * onBgParrallaxEffect()
   */
  @HostListener('window:mousemove', ['$event'])
  onParrallaxEffect(event: any) {
    let moveX = event.pageX;
    let moveY = event.pageY;
    this.bigImg.nativeElement.style.transform = ` translate3d(${-((moveX * 0.013) + 10)}px, ${-((moveY * 0.013) + 10)}px,${-((moveX * 0.013) + 10)}px)`;
    this.smallImg.nativeElement.style.transform = `translate3d(${-((moveX * 0.021) + 7)}px, ${-((moveY * 0.021) + 7)}px,${-((moveX * 0.013) + 10)}px)`;
  }

  // @HostListener('window:scroll')
  // onBgParrallaxEffect(){
  //    let y = (window.scrollY - this.bgParallex.nativeElement.offsetTop) *0.2 ;
  //    if(window.scrollY + 200 > this.bgParallex.nativeElement.offsetTop){
  //     this.bgParallex.nativeElement.style.backgroundPosition = `${50}% ${-(y)}px`;
  //    }else{
  //     this.bgParallex.nativeElement.style.backgroundPosition = `${50}% ${50}%`;
  //    }
  
  // }

  /**
   * CREATE COUSTOM BANNER SLIDE
   * nextSlide()
   * prevSlide()
   * slideShow()
   * autoPlaySlide()
   */

  slideShow(s: any) {
    // condition slide controll with indicator
    if (s > this.bannerDataArr.length - 1) {
      this.slideIndex = 0;
    } else if (s < 0) {
      this.slideIndex = this.bannerDataArr.length - 1;
    } else {
      this.slideIndex = s;
    }
  }
  nextSlide() {
    this.slideShow(this.slideIndex = this.slideIndex + 1);
  }
  prevSlide() {
    this.slideShow(this.slideIndex = this.slideIndex - 1);
  }



}

