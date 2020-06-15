import { OrderInfoService, ORDERS, orders } from './../order-info.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  constructor(private _route: ActivatedRoute, private orderDetail: OrderInfoService) {}
  
  orderId: number;
  order: orders;

  ngOnInit() {
  //This code is reffered from https://angular-2-training-book.rangle.io/routing/routeparams
  //As I was not familiar with the routing in angular, I have reffered and modified this part of code by myself
    this._route.params.subscribe((params) => {
      this.orderId = +params.id;
    });

    this.order = this.orderDetail.getItem(this.orderId);
  }
  ngOnDestroy() {}          
}
