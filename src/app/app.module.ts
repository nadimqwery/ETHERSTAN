import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { SharedService } from './shared/shared/shared.service';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { BotDetectCaptchaModule } from 'angular-captcha';


const config = {
  apiKey: 'AIzaSyDhkUtdH0_wmwW6XuyG7Svh1-2GJrb35Cs',
  authDomain: 'kontract-ec25b.firebaseapp.com',
  databaseURL: 'https://kontract-ec25b.firebaseio.com',
  projectId: 'kontract-ec25b',
  storageBucket: 'kontract-ec25b.appspot.com',
  messagingSenderId: '95312649603'
};


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({}),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
