import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {HttpModule} from "@angular/http";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {HomePage} from "../pages/home/home";
import {AgmCoreModule} from "@agm/core";
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {JobOffersPage} from "../pages/job-offer-page-group/job-offers/job-offers";
import {TabsPage} from "../pages/tabs/tabs";
import {JobofferService} from "../services/joboffer.service";
import {HttpClientModule} from "@angular/common/http";
import {JobOfferPage} from "../pages/job-offer-page-group/job-offer/job-offer";
import {LoginPage} from "../pages/login/login";
import {JobOfferAddPage} from "../pages/job-offer-page-group/job-offer-add/job-offer-add";
import {RefugeeListJobOffersPage} from "../pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers";
import { RefugeesPage } from '../pages/refugees/refugees';
import { RefugeesService } from '../services/refugees.service';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JobOffersPage,
    JobOfferPage,
    TabsPage,
    LoginPage,
    JobOfferAddPage,
    RefugeeListJobOffersPage,
    RefugeesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHcVsCeJyyQ7gDW8gaFyquAkoxQNN6dZA'
    }),
    AgmSnazzyInfoWindowModule,
    HttpClientModule,
    ChartModule.forRoot(highcharts)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JobOffersPage,
    JobOfferPage,
    TabsPage,
    LoginPage,
    JobOfferAddPage,
    RefugeeListJobOffersPage,
    RefugeesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JobofferService,
    RefugeesService
  ]
})
export class AppModule {}
