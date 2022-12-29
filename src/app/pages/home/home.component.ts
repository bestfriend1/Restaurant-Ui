import { Component, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CarouselControllService } from '../../services/carousel-controll.service';
import { ApiHandleService } from '../../services/common/api-handle.service';
import { NgxLoaderService } from '../../services/common/ngx-loader.service';
let offerData = require('../../db/offer-data.json');
let menuData = require('../../db/menu-data.json');
let product = require('./../../db/products.json');
let bannerData = require('./../../db/banner.json')
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
  productArr: any;
  bannerDataArr = bannerData?.data;
  slideIndex = 0;

  constructor(
    private carouselControll: CarouselControllService,
    private apiService: ApiHandleService,
    private ngxLoader : NgxLoaderService
  ) {

  }
  ngOnInit(): void {
    this.getAllProduct();
    this.slideShow(this.slideIndex);
    /**
     * Auto Play Slide 
     */
      setInterval(() => {
        this.nextSlide();
      }, 8000);
      
    // if (window.innerWidth < 600) {
    //   window.onmousedown = (e) => {
    //     console.log(e);
    //     let firstX = e.pageX;
    //     let lastX = 0;
    //     if (firstX > 0 && firstX > lastX) {
    //       this.nextSlide();
    //     } else {
    //       this.prevSlide();
    //     }
    //     lastX = e.pageX;
    //   }
    // }


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

  /**
   * HTTP REQUEST HANLDE
   * getAllProduct();
   */
  getAllProduct() {
    this.ngxLoader.onShowLoader();
    this.apiService.getAllProduct().subscribe((res) => {
      if (res) {
        this.productArr = res;
        console.log(this.productArr);
        this.ngxLoader.onHideLoader();
      }
    })
  }


}

