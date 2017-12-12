import { RefugeesPage } from './../pages/refugees/refugees';
import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {LoginPage} from "../pages/login/login";
import {JobOffersPage} from "../pages/job-offer-page-group/job-offers/job-offers";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

loginPage=LoginPage;
  tabsPage=TabsPage;
  joboffersPage=JobOffersPage;
  refugeesPage=RefugeesPage;
  @ViewChild('nav') nav:NavController;

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

