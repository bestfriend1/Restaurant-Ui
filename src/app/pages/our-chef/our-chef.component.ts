import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-our-chef',
  templateUrl: './our-chef.component.html',
  styleUrls: ['./our-chef.component.scss']
})
export class OurChefComponent implements OnInit,AfterViewInit {
  @ViewChild('winChef') winChef!:ElementRef;
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
  }

  onPerallax(event:MouseEvent){
    let x = event.offsetX * 0.015;
    let y = event.offsetY * 0.015;
    this.winChef.nativeElement.style.transform =`rotateY(${x}deg) rotateX(${y}deg)`;
  }
  
  onPerallaxOf(){
    this.winChef.nativeElement.style.transform =`rotateY(${0}deg) rotateX(${0}deg) `;

  }

  

}
