import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';

import { SignUpComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationGuard } from './../auth/authentication.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent, data: { title: extract('Home') } },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: extract('Home') } },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: extract('Home') },
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UserRoutingModule {}
