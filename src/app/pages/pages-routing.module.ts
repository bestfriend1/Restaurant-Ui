import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },{
        path:"home",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'menu-list',
        loadChildren: () => import('./menu-page/menu-page.module').then(m => m.MenuPageModule)
      },
      {
        path:"our-chef",
        loadChildren: () => import('./our-chef/our-chef.module').then(m => m.OurChefModule)
      },
      {
        path:"contact-us",
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
      },
      {
        path:"book-table",
        loadChildren: () => import('./reservation-table/reservation-table.module').then(m => m.ReservationTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
