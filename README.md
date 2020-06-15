# DAL Food Bank

### https://dsufoodbank.herokuapp.com/

# 1. Overview
The main idea behind this web application is to provide easy access to Dalhousie University's foodbank to all the Dalhousie community members.  This application will be titled as "DSU Food Bank." It will be accessible not only by current students but all the staff and alumni of the Dalhousie University residing in the province. The primary purpose of this application is to digitalize the current system and make it more transparent. This system will make the work more efficient for the DSU authorities as everything will be available digitally. This application will efficiently work for the food bank to manage the demand and supply of food and all necessary items. Also, looking at the current scenario of such pandemics, this will provide essential food to the members and help to maintain social distancing. 

---
## 1.1 Prerequisites

To have a local copy of assignment up and running on your local machine, you will first need to install the following software and environment.

1. [Node JS](https://nodejs.org/en/download/)
2. [npm](https://www.npmjs.com/get-npm)
3. [Angular CLI](https://cli.angular.io/)
4. Editor (Preferred  - [Visual Studio Code](https://code.visualstudio.com/download))


See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

# 2.Application
## 2.1 Installing

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
---
## 2.2 Page Links
>Other than these pages listed below all other links present in webpage will navigate to **Home Page**
1. **Home Page** - https://dsufoodbank.herokuapp.com/home
2. **Login** - https://dsufoodbank.herokuapp.com/login
>Order and Order detail page will not be accessible without **Login**
3. **Order** - https://dsufoodbank.herokuapp.com/orders
4. **Order Detail** - https://dsufoodbank.herokuapp.com/orders/7542 
>### Note:
>**Order Detail** page can only be accesse using the view *order* button present in Order page tabel.
5. **404 Error Page** - https://dsufoodbank.herokuapp.com/404
---
## 2.3 About Pages
1. **Home Page** - This page will be the landing page for the website. Some of the content provided in this page would be about the food bank. Services it provides and a small section for volunteers is present.
2. **Login** - Login page is provided for authenticating the user. For current design for login email and password is required. For better user experience and avoiding the errors **Login** but will only get activated if both the feilds has valid input.
3. **Order** - This page will contain all the order places by the user. All the orders are displayed in tabular form. Colums to this table are *Order id, Order Date, Receive Date, Status, View Order Detail*.
4. **Order Details** - Order detail page will show the order and all the items given in particular order. This page can only be access using the order id. Along with the items it will show the progress bar having status of order.
---
## 2.4 Webpage Validation
1. **Login** - For login I have validated both email and password field. For mail I have used Regular Expression for validating the Email Id entered by user. Even both the fields are required to be filled. Code of these validation is written in [login.component.ts](https://github.com/janimalav/DSUFoodBank/blob/master/src/app/auth/login.component.ts).
2. **Order & Order Details** - These two pages will not be accessed usnless user has login. If the user is not logged into the system he/she will be navigated to the login page. User can not directly navigate to the order or order details page without login.
---
## 2.5 Technology Stack

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and [NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:
  
- Automatic code formatting with [Prettier](https://prettier.io)
> For giving the website aesthetic feeling and making it more responsive some of the build should be generated which are listed below.
- [Angular Material](https://material.angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Material Bootstrap](https://mdbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Angular Font awesome](https://www.npmjs.com/package/angular-font-awesome)
---
## 2.6 Reason Of Usage
1. **Dark Nav Bar** -  For Nav Bar I have used Material Bootstrap library. The reason behind using this clases is to make nav bar responsive. I have choose *#5f5f5f* color for background. This is because the dark nav bar would contrast with the main body which is light in color.
2. **Dark Footer** - Footer used in this project is kept dark, same as the Nav bar. This is also kept because of the main body color.
3. **Light Background** - Main reason keeping the background white in color is that it enhances the look and feel of the website. Also while using any colorful image it sharpens the image's color.
4. **Font** - All the fonts used in this website is default font given by browser. Some of the fonts are changed and set acording to the webpage.
5. **Typography** - Typography of the webpages is kept minimalistic and asthetically pleasing. All the fonts used in the website makes sure that user can read all the content easily.
---
## 2.7 Responsiveness Testing
1. Screen Resolution (1920x1080) Normal laptop screen
2. Screen Resolutoin (375x812) iphone X
3. Screen Resolution (1024X1366) ipad pro
---
## 2.8 Libraries

-  [Angular](https://angular.io)
-  [Angular Material](https://material.angular.io)
-  [Material Icons](https://material.io/icons/)
-  [RxJS](http://reactivex.io/rxjs)
-  [ngx-translate](https://github.com/ngx-translate/core)
-  [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Material Bootstrap](https://mdbootstrap.com/)
- [Font Awesome](https://www.npmjs.com/package/angular-font-awesome)
    
# 3. Sources Used

### **orders.component.ts**

**Lines 13-25**

```javascript
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

```javascript
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
- The code used in orders component is refered from the [Angular Material](https://material.angular.io/components/table/overview) website. 
- Table section under [Angular Material]() demonstrates pagination and sorting in the table using predefined data.
- Link for [Sorting Material Table](https://stackblitz.com/angular/rdaomnmmael?file=src%2Fapp%2Ftable-sorting-example.ts) and enabling [Pagination in Material Table](https://stackblitz.com/angular/glmqladoole?file=src%2Fapp%2Ftable-pagination-example.ts) can be accessed here.

***


### **order-details.component.ts**

**Lines 12-21**

```javascript
  orderId: number;
  order: orders;

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.orderId = +params.id;
    });

    this.order = this.orderDetail.getItem(this.orderId);
  }
```
The code above was created by adapting the code from [Range.io](https://angular-2-training-book.rangle.io/routing/routeparams) as shown below: 

```javascript
 id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
```
- The code used in order-details component is refered from the [Range.io](https://angular-2-training-book.rangle.io/routing/routeparams) website.
- This code is used for getting the order id from the route parameter passed from orders.html. 


## 3.1 References
- [1] - Material Design for Bootstrap. 2020. Bootstrap Navbar Guideline - Examples & Tutorial. Basic & Advanced Usage. [online] Available at: <https://mdbootstrap.com/docs/jquery/navigation/navbar/> [Accessed 15 June 2020].

- [2] Material Design for Bootstrap. 2020. Bootstrap Footer - Examples & Tutorial. Basic & Advanced Usage. [online] Available at: <https://mdbootstrap.com/docs/jquery/navigation/footer/> [Accessed 15 June 2020].
- [3] Team, A., 2020. Angular Material. [online] Angular Material. Available at: <https://material.angular.io/components/table/overview> [Accessed 15 June 2020].
- [4] 2020. [online] Available at: <https://codepen.io/manit/pen/uFnJw> [Accessed 15 June 2020].
- [5] : Mark Otto, a., 2020. Forms. [online] Getbootstrap.com. Available at: <https://getbootstrap.com/docs/4.0/components/forms/> [Accessed 15 June 2020].
- [6] Instagram.com. 2020. Login • Instagram. [online] Available at: <https://www.instagram.com/dalstudentunion/?hl=en> [Accessed 15 June 2020].
- [7] Twitter.com. 2020. DSU Food Bank (@Dsufoodbank) On Twitter. [online] Available at: <https://twitter.com/dsufoodbank> [Accessed 15 June 2020].
- [8] Facebook.com. 2020. Dalhousie Student Union. [online] Available at: <https://www.facebook.com/dalstudentunion/> [Accessed 15 June 2020].
## 3.2 Image Refrences
- [1]DNAinfo Chicago. 2020. Feed Your Neighbors This Holiday Season, Donate To Food Pantries. [online] Available at: <https://www.dnainfo.com/chicago/20161116/irving-park/food-pantries-lincoln-square-irving-park-albany-park-donate-volunteer-what-need/> [Accessed 15 June 2020].

- [2] Freepik. 2020. Download Error 404 Concept For Landing Page For Free. [online] Available at: <https://www.freepik.com/free-vector/error-404-concept-landing-page_5135455.htm#page=1&query=404%20page&position=13> [Accessed 15 June 2020].

- [3] Highwayhospice.co.za. 2020. Groceries & Toiletries – Highway Hospice. [online] Available at: <https://highwayhospice.co.za/product/groceries-toiletries/> [Accessed 15 June 2020].

- [4] Ya-webdesign.com. 2020. Download Clipart - Thank You For Using YAWD. [online] Available at: <https://ya-webdesign.com/imgdownload.html> [Accessed 15 June 2020].

- [5] Vectors, R. and Vectors, D., 2020. Volunteers With Donation Boxes Isolated On White Vector Image On Vectorstock. [online] VectorStock. Available at: <https://www.vectorstock.com/royalty-free-vector/volunteerswith-donation-boxes-isolated-on-white-vector-10358199> [Accessed 15 June 2020].

- [6] Canstockphoto.es. 2020. Los Voluntarios Apoyan La Caja De Alimentos Vector Delgada Línea Icono. Los Voluntarios Apoyan, Ayudan A Organizaciones. [online] Available at: <https://www.canstockphoto.es/caja-alimento-apoyo-vector-l%C3%ADnea-71833415.html> [Accessed 15 June 2020].
- [7] Pinterest. 2020. Shopping Basket Free Vector Icons Designed By Hevngrafix | Бесплатные Иконки, Иконки. [online] Available at: <https://in.pinterest.com/pin/819584832164797443/> [Accessed 15 June 2020].

## Date Created
* Date Created: 11 JUN 2020
* Last Modification Date: 14 JUN 2020

## Authors

* [Malav Jani - B00851408](ml805403@dal.ca)
