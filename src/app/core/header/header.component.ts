import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lastScrollY = 0;
  headerFixed = false;
  constructor() {

  }
  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  headerFixedControll() {
    let firtstScrollY = window.scrollY;
    if (window.scrollY > 100 && window.scrollY < 500) {
      this.headerFixed = true;
      console.log(this.headerFixed);
    }
    else {
      if (window.scrollY > 500 && firtstScrollY < this.lastScrollY) {
        this.headerFixed = true;
        console.log(this.headerFixed);
      } else {
        this.headerFixed = false;
        console.log(this.headerFixed);
      }
    }
    
    this.lastScrollY = firtstScrollY;

  }


}
