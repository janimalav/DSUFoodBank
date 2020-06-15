import { OrderInfoService, orders, ORDERS } from './order-info.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}
  //https://material.angular.io/components/table/overview for pagination and sorting
  //As I am working in angular for the first time and have never used the Angular material table
  //I did not have any idea of how to set pagination and sorting in Angular Material Table
  displayedColumns: string[] = ['Order Id.', 'placed_date', 'pickup_date', 'status', 'actions'];
  xyz = new MatTableDataSource<orders>(ORDERS);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.xyz.paginator = this.paginator;
    this.xyz.sort = this.sort;
  }

  ngOnDestroy() {}

  fung(element: any) {
    this.router.navigate([`orders/${element.id}`]);
  }
}
