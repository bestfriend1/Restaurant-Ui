import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationTableRoutingModule } from './reservation-table-routing.module';
import { ReservationTableComponent } from './reservation-table.component';


@NgModule({
  declarations: [
    ReservationTableComponent
  ],
  imports: [
    CommonModule,
    ReservationTableRoutingModule
  ]
})
export class ReservationTableModule { }
