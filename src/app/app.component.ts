import { Component, OnInit, HostListener } from '@angular/core';
import { NgxLoaderService } from './services/common/ngx-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private ngxLoader:NgxLoaderService
  ){

  }

  ngOnInit(): void {
  }
}
