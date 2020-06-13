import { Injectable } from '@angular/core';
const PENDING = 'PENDING';
const PROCESSING = 'PROCESSING';
const COMPLETED = 'COMPLETED';
const REJECTED = 'REJECTED';

@Injectable({
  providedIn: 'root',
})
export class OrderInfoService {
  item: orders;
  getItem(id: number): orders {
    return ORDERS.filter((item: orders) => item.id === id)[0];
  }
}

export const ORDERS: orders[] = [
  {
    id: 7542,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00785474',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PROCESSING,
  },
  {
    id: 7543,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
      {
        name: 'Can Food',
        qty: '5',
      },
      {
        name: 'Potato',
        qty: '1 kg',
      },
      {
        name: 'Latus',
        qty: '1 Pack',
      },
    ],
    userid: 'B00851654',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 20, 2020',
    status: PENDING,
  },
  {
    id: 7544,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00959512',
    placed_date: 'June 12, 2020',
    pickup_date: 'June 15, 2020',
    status: PENDING,
  },
  {
    id: 7545,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00863254',
    placed_date: 'June 15, 2020',
    pickup_date: 'June 18, 2020',
    status: REJECTED,
  },
  {
    id: 7546,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00887744',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PROCESSING,
  },
  {
    id: 7547,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B0083214',
    placed_date: 'June 17, 2020',
    pickup_date: 'June 18, 2020',
    status: PROCESSING,
  },
  {
    id: 7548,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00785474',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 19, 2020',
    status: PENDING,
  },
  {
    id: 7549,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00802010',
    placed_date: 'June 11, 2020',
    pickup_date: 'June 15, 2020',
    status: COMPLETED,
  },
  {
    id: 7550,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00828282',
    placed_date: 'June 14, 2020',
    pickup_date: 'June 18, 2020',
    status: COMPLETED,
  },
  {
    id: 7551,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00838383',
    placed_date: 'June 12, 2020',
    pickup_date: 'June 20, 2020',
    status: REJECTED,
  },
  {
    id: 7552,
    items: [
      {
        name: 'Toilet Paper',
        qty: '1',
      },
      {
        name: 'Tomato',
        qty: '2 Kg',
      },
      {
        name: 'Beef',
        qty: '5',
      },
      {
        name: 'Beef',
        qty: '5',
      },
    ],
    userid: 'B00704125',
    placed_date: 'June 16, 2020',
    pickup_date: 'June 18, 2020',
    status: PENDING,
  },
];

export interface orders {
  id: number;
  items: orderDetail[];
  userid: String;
  placed_date: String;
  pickup_date: String;
  status: String;
}

interface orderDetail {
  name: string;
  qty: String;
}
