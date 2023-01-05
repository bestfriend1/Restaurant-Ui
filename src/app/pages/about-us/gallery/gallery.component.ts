import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() galleryData!: any[];
  indexNo = 0;
  onShow = false;
  onAutoPlay = false;
  
  constructor() {

  }
  ngOnInit(): void {
    this.onAutoPlayControl();
  }
  //ALL GALLERY METHOD 
  /**
   * onShowGallery();
   * onHideGallery();
   * selectGalleryImg();
   * nextSlide();
   * prevSlide();
   * slideControl();
   * onAutoPlayControl();
   */
  onShowGallery(index: any) {
    this.onShow = true;
    this.indexNo = index;
  }
  onHideGallery() {
    this.onShow = false;
  }

  selectGalleryImg(gIndex: any) {
    this.indexNo = gIndex;
  }

  nextSlide() {
    this.indexNo = this.indexNo + 1;
    this.slideControl(this.indexNo);
  }
  prevSlide() {
    this.indexNo = this.indexNo - 1;
    this.slideControl(this.indexNo);
  }

  slideControl(n: any) {
    if (n > this.galleryData.length-1) {
      this.indexNo = 0;
    }
    if (n < 0) {
      this.indexNo = this.galleryData.length - 1;
    }
    console.log(this.indexNo);
  }


  onAutoPlayControl(){
    let lastIndex = 0;
     this.onAutoPlay =! this.onAutoPlay;
     if(this.onAutoPlay === true){
       setInterval(() => {
        lastIndex = this.indexNo;
        this.indexNo = this.indexNo+1;
        if(this.indexNo == this.galleryData.length){
           this.indexNo = 0;
        }
       },2000);
     }else{
       this.indexNo = lastIndex;
     }
  }
  




}
