import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselControllService } from '../../services/carousel-controll.service';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  @ViewChild('gallery') gallery!:GalleryComponent;




  constructor(
    private carousel: CarouselControllService
  ) {

  }

  
  ngOnInit(): void {

  }


  // GALLERY CONTROLL METHOD

  onShowGallery(index:any){
     if(index > -1){
      this.gallery.onShowGallery(index);
     }else{
       console.log('Index not founded');
     }
    
  }







  galleryData = [
    {
      _id:"1",
       galleryImage:"./assets/images/temp/image/gallery-1.jpg",
    },
    {
      _id:"2",
       galleryImage:"./assets/images/temp/image/gallery-2.jpg",
    },
    {
      _id:"3",
       galleryImage:"./assets/images/temp/image/gallery-3.jpg",
    },
    {
      _id:"4",
       galleryImage:"./assets/images/temp/image/gallery-1.jpg",
    },
    {
      _id:"5",
       galleryImage:"./assets/images/temp/image/gallery-2.jpg",
    },
    {
      _id:"6",
       galleryImage:"./assets/images/temp/image/gallery-3.jpg",
    },
  ]
  

}
