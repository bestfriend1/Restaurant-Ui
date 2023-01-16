import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild('fullScreen') elem!: ElementRef;
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
    console.log(this.indexNo);
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
    if (n > this.galleryData.length - 1) {
      this.indexNo = 0;
    }
    if (n < 0) {
      this.indexNo = this.galleryData.length - 1;
    }
    console.log(this.indexNo);
  }

  onAutoPlayToggle() {
    this.onAutoPlay = !this.onAutoPlay;
  }

  onFullScreen() {
    if (this.elem.nativeElement.requestFullscreen) {
      this.elem.nativeElement.requestFullscreen();
    } else if (this.elem.nativeElement.webkitRequestFullscreen) { /* Safari */
      this.elem.nativeElement.webkitRequestFullscreen();
    } else if (this.elem.nativeElement.msRequestFullscreen) { /* IE11 */
      this.elem.nativeElement.msRequestFullscreen();
    }
  }


  onAutoPlayControl() {
    let lastIndex = 0;
    if (this.onAutoPlay === true) {
      setInterval(() => {
        lastIndex = this.indexNo;
        this.indexNo = this.indexNo + 1;
        if (this.indexNo == this.galleryData.length) {
          this.indexNo = 0;
        }
      }, 2000);
    } else {
      this.indexNo = lastIndex;
    }
  }





}
