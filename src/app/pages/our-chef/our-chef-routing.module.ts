import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurChefComponent } from './our-chef.component';

const routes: Routes = [
  {
    path:"",
    component:OurChefComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurChefRoutingModule { }
