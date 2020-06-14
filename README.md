
# Assignment - 2

* Date Created: 04 JUN 2020
* Last Modification Date: 13 JUN 2020

## Authors

* [Malav Jani - B00851408](ml805403@dal.ca)


## Getting Started

**[Optional]** If needing to provide the marker with a copy of the project that should run on their local machine for development, testing and/or marking purposes. Please include the following sections.

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of assignment up and running on your local machine, you will first need to install the following software and environment.

1. [Node JS](https://nodejs.org/en/download/)
2. [npm](https://www.npmjs.com/get-npm)
3. [Angular CLI](https://cli.angular.io/)
4. Editor (Preferred  - [Visual Studio Code](https://code.visualstudio.com/download))


See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

It is assumed that you have installed all the tools required to run the application.

1. Open terminal in root of the application directory.
2. Install all the required npm packages. It may take some time to complete.
```sh
npm install
```
3. Run the application in development server and open `localhost:4200` in browser.
 ```sh
npm run dev
```

> This command will run script `ng serve` configured in `package.json`.
4. To build application for Production Server, run following command.
```sh
npm run build
```

On successfully running the application, you will see page attached below in your browser.
<!-- Image Here -->

## Deployment

Add additional notes about how to deploy this on a live system

## Built With


Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and [NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:
  
- Automatic code formatting with [Prettier](https://prettier.io)

  

#### Libraries

  

-  [Angular](https://angular.io)
-  [Angular Material](https://material.angular.io)
-  [Material Icons](https://material.io/icons/)
-  [RxJS](http://reactivex.io/rxjs)
-  [ngx-translate](https://github.com/ngx-translate/core)
-  [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Font Awesome](https://www.npmjs.com/package/angular-font-awesome)

## Sources Used

### orders.component.ts

**Lines 1-25**

```
export class OrdersComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}
  displayedColumns: string[] = ['Order Id.', 'placed_date', 'pickup_date', 'status', 'actions'];
  xyz = new MatTableDataSource<orders>(ORDERS);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.xyz.paginator = this.paginator;
    this.xyz.sort = this.sort;
  }
```
The code above was created by adapting the code from [Angular Material](https://material.angular.io/components/table/overview) as shown below: 

```
 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);

 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
```
- The code used in orders component is refered from the [Angular Material]() website. 
- Table section under [Angular Material]() demonstrates pagination and sorting in the table using predefined data.
- Link for [Sorting Material Table](https://stackblitz.com/angular/rdaomnmmael?file=src%2Fapp%2Ftable-sorting-example.ts) and enabling [Pagination in Material Table](https://stackblitz.com/angular/glmqladoole?file=src%2Fapp%2Ftable-pagination-example.ts) can be accessed here.


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
