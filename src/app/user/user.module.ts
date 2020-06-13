import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { SignUpComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [ProfileComponent, SignUpComponent, ForgotPasswordComponent],
  providers: [],
})
export class UserModule {}
