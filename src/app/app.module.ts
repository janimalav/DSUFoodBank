import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { from } from 'rxjs';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  imports: [
    NavbarModule,
    WavesModule,
    ButtonsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    AuthModule,
    MatTableModule,
    FontAwesomeModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, HomeComponent, ErrorPageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
