import { Component, OnInit } from '@angular/core';
let menuData = require('../../db/menu-data.json');
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  menuDataArr = menuData?.data;
  
  ngOnInit(): void {
    
  }
}
