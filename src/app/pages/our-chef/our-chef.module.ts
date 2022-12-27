import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurChefRoutingModule } from './our-chef-routing.module';
import { OurChefComponent } from './our-chef.component';


@NgModule({
  declarations: [
    OurChefComponent
  ],
  imports: [
    CommonModule,
    OurChefRoutingModule
  ]
})
export class OurChefModule { }
