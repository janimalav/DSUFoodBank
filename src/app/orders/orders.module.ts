import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTableModule,
    MaterialModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
  ],
  declarations: [OrdersComponent, OrderDetailsComponent],
  providers: [],
})
export class OrdersModule {}
