import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {JobOffersPage} from "../job-offer-page-group/job-offers/job-offers";
import {LoginPage} from "../login/login";
import {CoursePage} from "../course-group/course/course";

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  joboffersPage= JobOffersPage;
  homePage= HomePage;
  loginPage= LoginPage;
  coursesPage= CoursePage;


}
