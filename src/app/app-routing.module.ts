import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { HomeComponent } from './home/home.component';

import { AuthenticationGuard } from './auth';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: extract('Home') } },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'cart',
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
