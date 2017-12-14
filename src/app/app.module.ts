import { EvenementService } from './../services/evenement.service';
import { EvenementsPage } from './../pages/evenements/evenements';
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

import {CoursePage} from "../pages/course-group/course/course";
import {CoursesPage} from "../pages/course-group/courses/courses";
import {AddCoursePage} from "../pages/course-group/add-course/add-course";
import {CourseService} from "../services/course.service";
import { NewsPage } from '../pages/news/news';
import { NewsService } from '../services/news.service';
import { AddnewsPage } from '../pages/news/addnews/addnews';


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
    RefugeesPage,
    CoursePage,
    CoursesPage,
    AddCoursePage,
    EvenementsPage,
    NewsPage,
    AddnewsPage
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
    RefugeesPage,
    CoursePage,
    CoursesPage,
    AddCoursePage,
    EvenementsPage,
    NewsPage,
    AddnewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JobofferService,
    RefugeesService,
    CourseService,
    EvenementService,
    NewsService
  ]
})
export class AppModule {}
