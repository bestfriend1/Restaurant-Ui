import { Component, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CarouselControllService } from '../../services/carousel-controll.service';
let offerData = require('../../db/offer-data.json');
let menuData = require('../../db/menu-data.json');
let product = require('./../../db/products.json');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('bigImg') bigImg!: ElementRef;
  @ViewChild('smallImg') smallImg!: ElementRef;
  /**
   * Product Store Variables
   **/ 
   offerDataArr = offerData.offerData;
   menuDataArr = menuData?.data;
   productArr = product.data;

  constructor(
    private carouselControll: CarouselControllService
  ) {

  }
  ngOnInit(): void {

  }

  /***
   * PARRALAX EFFECT
   * onParrallaxEffect()
   */
  @HostListener('window:mousemove', ['$event'])
  onParrallaxEffect(event: any) {
    let moveX = event.pageX;
    let moveY = event.pageY;
    this.bigImg.nativeElement.style.transform = ` translate3d(${-((moveX * 0.013)+10)}px, ${-((moveY * 0.013)+10)}px,${-((moveX * 0.013)+10)}px)`;
    this.smallImg.nativeElement.style.transform = `translate3d(${-((moveX * 0.021)+7)}px, ${-((moveY * 0.021)+7)}px,${-((moveX * 0.013)+10)}px)`;
  }

}

